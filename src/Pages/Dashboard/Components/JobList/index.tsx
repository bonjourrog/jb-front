import './JobList.css';
import { useMemo, useState } from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuthStore } from "../../../../stores/authStore";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { Menu, MenuItem } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import { Delete, Edit } from '@mui/icons-material';
import { Job } from '../../../../entity/job';
import { useJobStore } from '../../../../stores/jobStore';
import NewJobForm from '../../../../Components/NewJobForm';
import JobRow from './Components/JobRow';

const JobList = () => {
    const { token } = useAuthStore();
    if (!token) return <div>No autorizado</div>;
    const decoded: any = useMemo(()=>jwt_decode(token),[token])
    const [showForm, setShowForm] = useState<boolean>(false);
    const [jobSelected, setJobSelected] = useState<Job | null>(null);
    const [menuState, setMenuState] = useState<{ anchorEl: null | HTMLElement, isOpen: boolean, jobId: string }>({
        anchorEl: null,
        isOpen: false,
        jobId: ''
    });
    const [filters, _] = useState<Filter>({
        company_id: decoded.userId,
        contract: '',
        industry: '',
        schedule: '',
        search: ''
    });
    const { deleteJob } = useJobs(filters);
    const jobs = useJobStore(state => state.jobs);
    const setJobs = useJobStore(state => state.setJobs);

    const handleJobDelete = async () => {
        const _jobSelected: Job = jobs.filter(j => j._id === menuState.jobId)[0] as Job;
        setJobSelected(_jobSelected);
        await deleteJob(_jobSelected._id)
        const newJobs: Job[] = jobs.filter(j => j._id !== _jobSelected._id)
        setJobs(newJobs);
    }
    
    
    return <section className='p-0 md:p-10'>
        {
            showForm ?
                <div className={`job-list-form-container`}>
                    <NewJobForm setShowForm={setShowForm} jobData={jobSelected} />
                </div>
                : undefined
        }
        <div className='overflow-x-auto p-1 w-auto'>
            {jobs && jobs.length > 0 ? <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Puesto</th>
                        <th className='hidden md:table-cell'>Salario</th>
                        <th className='hidden lg:table-cell'>Beneficios</th>
                        <th>Publicado</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <JobRow job={job} filters={filters} setStateMenu={(event:React.MouseEvent<HTMLTableDataCellElement, MouseEvent>)=>{
                            setMenuState({
                                anchorEl: event.currentTarget,
                                isOpen: true,
                                jobId: job._id
                            });
                        }}/>
                    ))}
                </tbody>
            </table> : <p className='px-3 py-6 font-extrabold text-3xl text-zinc-700'>Aun no tienes empleos registrados</p>}

            <Menu
                id="basic-menu"
                anchorEl={menuState.anchorEl}
                open={menuState.isOpen}
                onClose={() => setMenuState({ anchorEl: null, isOpen: false, jobId: '' })}
                keepMounted={false}
                sx={{
                    '& .MuiPaper-root': {
                        boxShadow: '0 .2em 1em rgba(0,0,0,0.1)'
                    }
                }}
            >
                <MenuItem onClick={() => {
                    const _jobSelected: Job = jobs.filter(j => j._id === menuState.jobId)[0] as Job;
                    setJobSelected(_jobSelected);
                    setShowForm(true);
                    setMenuState({ anchorEl: null, isOpen: false, jobId: '' });
                }} sx={{ mb: 2 }}>
                    <div className='flex items-center gap-2 text-sm text-gray-700'><Edit sx={{ fontSize: 18 }} /> Editar</div>
                </MenuItem>
                <MenuItem onClick={() => {
                    handleJobDelete();
                    setMenuState({ anchorEl: null, isOpen: false, jobId: '' });
                }}>
                    <div className='flex items-center gap-2 text-sm text-gray-700'><Delete sx={{ fontSize: 18 }} /> Eliminar</div>
                </MenuItem>
            </Menu>
        </div>
        <div className='new-job-btn' onClick={() => {
            setJobSelected(null);
            setShowForm(true);
        }}>
            <MdAdd />Nuevo trabajo
        </div>
    </section>
}
export default JobList;