import { RadioGroup } from '@mui/material';
import './Filters.css';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useJobStore } from '../../../../stores/jobStore';
import RadioPill from '../../../../Components/RadioPill';
const Filters:FC<{setShowFilters?:Dispatch<SetStateAction<boolean>>}> = ({setShowFilters}) => {
    const JobType:string[] = ['Medio tiempo', 'Tiempo completo', 'Practicante', 'Temporal', 'Proyecto', 'Limpiar']
    const jobSchedule: string[] = ['Nocturno', 'Vespertino', 'Matutino', 'Rotativo', 'Limpiar']
    const filters = useJobStore(state => state.filters);
    const setFilters = useJobStore(state => state.setFilters);

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
        <button className='filter__search-btn' onClick={()=>setShowFilters!(false)}>buscar</button>
    </ul>
}
export default Filters;