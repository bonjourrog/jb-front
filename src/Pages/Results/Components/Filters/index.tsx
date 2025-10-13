import { RadioGroup } from '@mui/material';
import './Filters.css';
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import { useJobStore } from '../../../../stores/jobStore';
import RadioPill from '../../../../Components/RadioPill';
const Filters:FC<{setShowFilters?:Dispatch<SetStateAction<boolean>>}> = ({setShowFilters}) => {
    const [salary, setSalary] = useState<{ min: string, max: string }>({
        min: '',
        max: ''
    })
    const JobType:string[] = ['Medio tiempo', 'Tiempo completo', 'Practicante', 'Temporal', 'Proyecto', 'Limpiar']
    const jobSchedule: string[] = ['Nocturno', 'Vespertino', 'Matutino', 'Rotativo', 'Limpiar']
    const filters = useJobStore(state => state.filters);
    const setFilters = useJobStore(state => state.setFilters);

    const handleSalarychange = (event: ChangeEvent<HTMLInputElement>) => {
        setSalary({ ...salary, [event.target.name]: event.target.value });
    }
    const handleContractChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            contract: event.target.value === 'limpiar' ? '' : event.target.value
        });
    }
    const handleScheduleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilters({
            ...filters,
            schedule: event.target.value === 'limpiar' ? '' : event.target.value
        });
    }
    return <ul className='filters'>
        <li>
            <strong>Tipo de empleo</strong>
            <RadioGroup
                onChange={handleContractChange}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    color: '#494949', 
                    py: 2, 
                    fontSize: '.1em',
                    '& .MuiSvgIcon-root': { color: '#656565' }
                }}>
                {JobType.map(type=><RadioPill value={type} />)}
                
            </RadioGroup>
        </li>
        <li>
            <strong>Horario</strong>
            <RadioGroup
                onChange={handleScheduleChange}
                sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap',
                    color: '#494949', 
                    py: 2, 
                    fontSize: '.1em',
                    '& .MuiSvgIcon-root': { color: '#656565' }
                }}>
                {jobSchedule.map(type=><RadioPill value={type} />)}
            </RadioGroup>
        </li>
        <button className='w-fit px-10 py-3 mx-auto my-1 font-bold rounded-md bg-blue-100 text-blue-600 border border-blue-600' onClick={()=>setShowFilters!(false)}>buscar</button>
    </ul>
}
export default Filters;