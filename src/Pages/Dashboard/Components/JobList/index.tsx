import './JobList.css';
import { useState } from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuthStore } from "../../../../stores/authStore";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { FormControlLabel, FormGroup, Menu, MenuItem} from '@mui/material';
import { MdAdd } from 'react-icons/md';
import JobListForm from '../../../../Components/NewJobForm';
import { Delete, Edit, MoreVert } from '@mui/icons-material';
import { Job } from '../../../../entity/job';
import { useJobStore } from '../../../../stores/jobStore';
import SwitchComponent from './Components/SwitchComponent';

const JobList = () => {
    const { token } = useAuthStore();
    if (!token) return <div>No autorizado</div>;
    const decoded: any = jwt_decode(token);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [jobSelected, setJobSelected] = useState<Job | null>(null);
    const [menuState, setMenuState] = useState<{anchorEl:null | HTMLElement, isOpen:boolean, jobId:string}>({
        anchorEl: null,
        isOpen: false,
        jobId: ''
    });
    const [filters, setFilters] = useState<Filter>({
        company_id: decoded.userId,
        contract: '',
        industry: '',
        schedule: '',
        search: ''
    });
    const {deleteJob} = useJobs(filters);
    const  {jobs, setJobs} = useJobStore();

    const handleJobDelete = async()=>{
        const _jobSelected:Job = jobs.filter(j=>j._id === menuState.jobId)[0] as Job;
        setJobSelected(_jobSelected);
        await deleteJob(_jobSelected._id)
        const newJobs:Job[] = jobs.filter(j=>j._id!==_jobSelected._id)
        setJobs(newJobs);
    }

    
    return <section className='p-10'>
        <div className={`absolute w-full h-full ${showForm ? 'top-1/2' : '-top-full'} left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-zinc-700/35`}>
            <JobListForm setShowForm={setShowForm} jobData={jobSelected}/>
        </div>
        <div className='overflow-x-auto p-1 w-auto'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Puesto</th>
                        <th>Salario</th>
                        <th>Beneficios</th>
                        <th>Descripción</th>
                        <th>Descripción corta</th>
                        <th>Publicado</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job._id}>
                            <td className='hover:bg-gray-100' onClick={(event) => {
                                setMenuState({
                                    anchorEl: event.currentTarget,
                                    isOpen: true,
                                    jobId: job._id
                                });
                            }}>
                                
                                <div className='flex gap-2 justify-center items-start'>
                                    <MoreVert className='text-gray-400' />
                                </div>
                            </td>
                            <td className='editable'>
                                <strong>{job.title}</strong>
                            </td>
                            <td className='editable'>
                                <p className='text-zinc-500'>
                                    {Math.trunc(job.salary).toLocaleString('en-US', { style: 'currency', currency: 'usd', minimumFractionDigits: 0 })}
                                </p>
                            </td>
                            <td className='editable'>
                                <div className='flex gap-2'>
                                    {job.benefits.map(benefit => (
                                        <p key={benefit} className='px-2 py-1 text-xs text-emerald-600 bg-emerald-200 rounded-sm'>{benefit}</p>
                                    ))}
                                </div>
                            </td>
                            <td className='editable max-w-96 text-gray-400 text-sm font-bold'>
                                {job.description.length > 30 ? `${job.description.substring(0, 30)}...` : job.description}
                            </td>
                            <td className='editable max-w-96 text-zinc-400 text-sm font-bold'>
                                {job.short_description.length > 30 ? `${job.short_description.substring(0, 30)}...` : job.short_description}
                            </td>
                            <td className='editable'>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<SwitchComponent sx={{ m: 1 }} checked={job.published} />}
                                        label=""
                                    />
                                    {job.published}
                                </FormGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                    const _jobSelected:Job = jobs.filter(j=>j._id === menuState.jobId)[0] as Job;
                    setJobSelected(_jobSelected);
                    setShowForm(true);
                    setMenuState({ anchorEl: null, isOpen: false, jobId: '' });
                }} sx={{mb:2}}>
                    <div className='flex items-center gap-2 text-sm text-gray-700'><Edit sx={{fontSize:18}}/> Editar</div>
                </MenuItem>
                <MenuItem onClick={() => {
                    console.log('Click delete');
                    handleJobDelete()
                }}>
                    <div className='flex items-center gap-2 text-sm text-gray-700'><Delete sx={{fontSize:18}}/> Eliminar</div>
                </MenuItem>
            </Menu>
        </div>
        <div className='new-job-btn' onClick={() => {
            setJobSelected(null);
            setShowForm(true);
        }}>
            <MdAdd />Nuevo trabajo
        </div>
        {/* <ul className='grid grid-cols-3 gap-4 p-4'>
            {jobs.map(job => (
                <div key={job._id}><JobCard showCompanyInfo={true} color='red' job={job} icon={<FiEye className='absolute right-4 text-zinc-400 hover:text-indigo-500'/>} className='relative'/></div>
            ))}
        </ul> */}
    </section>
}
export default JobList;