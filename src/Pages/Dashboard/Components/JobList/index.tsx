import './JobList.css';
import { useState } from "react";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuthStore } from "../../../../stores/authStore";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { FormControlLabel, FormGroup, styled, Switch, SwitchProps, Tooltip } from '@mui/material';
import { MdAdd } from 'react-icons/md';
import JobListForm from '../../../../Components/NewJobForm';
import { MoreVert } from '@mui/icons-material';

const JobList = () => {
    const { token } = useAuthStore();
    if (!token) return <div>No autorizado</div>;
    const decoded: any = jwt_decode(token);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [filters, setFilters] = useState<Filter>({
        company_id: decoded.userId,
        contract: '',
        industry: '',
        schedule: '',
        search: ''
    });
    const { jobs } = useJobs(filters);

    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: '100%',
        height: 30,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 3,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(70px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#65C466',
                    opacity: 1,
                    border: 0,
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#2ECA45',
                    }),
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.grey[100],
                ...theme.applyStyles('dark', {
                    color: theme.palette.grey[600],
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
                ...theme.applyStyles('dark', {
                    opacity: 0.3,
                }),
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 24,
            height: 24,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#E9E9EA',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
            ...theme.applyStyles('dark', {
                backgroundColor: '#39393D',
            }),
        },
    }));

    return <section className='p-10'>
        <div className={`absolute w-full h-full ${showForm ? 'top-1/2' : '-top-full'} left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-zinc-700/35`}>
            <JobListForm setShowForm={setShowForm} />
        </div>
        <div className='overflow-x-auto p-1 w-auto'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Puesto</th>
                        <th>Salario</th>
                        <th>Beneficios</th>
                        <th>Descriopcion</th>
                        <th>Descripcion corta</th>
                        <th>Publicado</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr>
                            <td className='hover:bg-gray-100'>
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
                                        <p className='px-2 py-1 text-xs text-emerald-600 bg-emerald-200 rounded-sm'>{benefit}</p>
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
                                        control={<IOSSwitch sx={{ m: 1 }} checked={job.published} />}
                                        label=""
                                    />
                                    {job.published}
                                </FormGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='new-job-btn' onClick={() => setShowForm(true)}>
            <MdAdd />New job
        </div>
        {/* <ul className='grid grid-cols-3 gap-4 p-4'>
            {jobs.map(job => (
                <div key={job._id}><JobCard showCompanyInfo={true} color='red' job={job} icon={<FiEye className='absolute right-4 text-zinc-400 hover:text-indigo-500'/>} className='relative'/></div>
            ))}
        </ul> */}
    </section>
}
export default JobList;