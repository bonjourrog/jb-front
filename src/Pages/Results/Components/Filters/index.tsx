import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import './Filters.css';
import { ChangeEvent, useState } from 'react';
const Filters = () => {
    const [salary, setSalary] = useState<{min:string, max:string}>({
        min:'',
        max:''
    })
    const handleSalarychange = (event:ChangeEvent<HTMLInputElement>)=>{
        setSalary({...salary,[event.target.name]:event.target.value});
    }
    return <ul className='filters'>
        <li>
            <strong>Tipo de empleo</strong>
            <RadioGroup
                sx={{
                    '& .MuiSvgIcon-root': { color: '#656565' },
                    color: '#494949', pl: 2, fontSize: '.1em',
                }}>
                <FormControlLabel value="medio tiempo" control={<Radio sx={{p:.5}} size='small' />} label="Medio tiempo" />
                <FormControlLabel value="tiempo completo" control={<Radio sx={{p:.5}} size='small' />} label="Tiempo completo" />
                <FormControlLabel value="practicante" control={<Radio sx={{p:.5}} size='small' />} label="Practicante" />
                <FormControlLabel value="temporal" control={<Radio sx={{p:.5}} size='small' />} label="Temporal" />
                <FormControlLabel value="proyecto" control={<Radio sx={{p:.5}} size='small' />} label="Proyecto" />
                <FormControlLabel value="" control={<Radio sx={{p:.5}} size='small' />} label="Limpiar" />
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
            <FormGroup
                sx={{
                    '& .MuiSvgIcon-root': { color: '#656565' },
                    color: '#494949', pl: 2, fontSize: '.1em'
                }}>
                <FormControlLabel control={<Checkbox sx={{p:.5}} size='small' />} label="nocturno" />
                <FormControlLabel control={<Checkbox sx={{p:.5}} size='small' />} label="vespertino" />
                <FormControlLabel control={<Checkbox sx={{p:.5}} size='small' />} label="matutino" />
                <FormControlLabel control={<Checkbox sx={{p:.5}} size='small' />} label="rotativo" />
            </FormGroup>
        </li>
    </ul>
}
export default Filters;