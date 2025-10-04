import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import './Filters.css';
import { ChangeEvent, useState } from 'react';
import { useJobStore } from '../../../../stores/jobStore';
const Filters = () => {
    const [salary, setSalary] = useState<{ min: string, max: string }>({
        min: '',
        max: ''
    })
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
                    '& .MuiSvgIcon-root': { color: '#656565' },
                    color: '#494949', pl: 2, fontSize: '.1em',
                }}>
                <FormControlLabel value="medio tiempo" control={<Radio sx={{ p: .5 }} size='small' />} label="Medio tiempo" />
                <FormControlLabel value="tiempo completo" control={<Radio sx={{ p: .5 }} size='small' />} label="Tiempo completo" />
                <FormControlLabel value="practicante" control={<Radio sx={{ p: .5 }} size='small' />} label="Practicante" />
                <FormControlLabel value="temporal" control={<Radio sx={{ p: .5 }} size='small' />} label="Temporal" />
                <FormControlLabel value="proyecto" control={<Radio sx={{ p: .5 }} size='small' />} label="Proyecto" />
                <FormControlLabel value="limpiar" control={<Radio sx={{ p: .5 }} size='small' />} label="Limpiar" />
            </RadioGroup>
        </li>
        {/* <li>
            <strong>Salario</strong>
            <Box sx={{ display: 'flex', gap: '.5em', mt: '.2em' }}>
                <NumericFormat
                    value={salary.min}
                    onChange={handleSalarychange}
                    customInput={TextField}
                    thousandSeparator
                    min={0}
                    valueIsNumericString
                    prefix="$"
                    name='min'
                    variant="outlined"
                    label="minimo"
                />
                <NumericFormat
                    value={salary.max}
                    onChange={handleSalarychange}
                    customInput={TextField}
                    thousandSeparator
                    max={1000000}
                    valueIsNumericString
                    prefix="$"
                    name='max'
                    variant="outlined"
                    label="Máximo"
                />
            </Box>
        </li> */}
        <li>
            <strong>Horario</strong>
            <RadioGroup
            onChange={handleScheduleChange}
                sx={{
                    '& .MuiSvgIcon-root': { color: '#656565' },
                    color: '#494949', pl: 2, fontSize: '.1em'
                }}>
                <FormControlLabel value="nocturno" control={<Radio sx={{ p: .5 }} size='small' />} label="Nocturno" />
                <FormControlLabel value="vespertino" control={<Radio sx={{ p: .5 }} size='small' />} label="Vespertino" />
                <FormControlLabel value="matutino" control={<Radio sx={{ p: .5 }} size='small' />} label="Matutino" />
                <FormControlLabel value="rotativo" control={<Radio sx={{ p: .5 }} size='small' />} label="Rotativo" />
                <FormControlLabel value="limpiar" control={<Radio sx={{ p: .5 }} size='small' />} label="Limpiar" />
            </RadioGroup>
        </li>
    </ul>
}
export default Filters;