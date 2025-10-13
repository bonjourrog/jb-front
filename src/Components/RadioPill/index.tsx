import { FormControlLabel, Radio } from "@mui/material";

export default function RadioPill({ value }: { value: string }) {
    return <FormControlLabel
        sx={{
            border: '.1em solid #9095A0',
            borderRadius: '20em',
            padding: '6em 10em',
            margin: 0,
            cursor: 'pointer',
            backgroundColor: 'white',
            transition: 'all 0.2s',
            '& .MuiFormControlLabel-label': {
                fontSize: '8em',
                color: '#9095A0',
            },
            '&:has(.Mui-checked)': {
                backgroundColor: '#E8EEFF',
                borderColor: '#5B7FFF',
                '& .MuiFormControlLabel-label': {
                    color: '#5B7FFF',
                    fontWeight: 500,
                }
            },
            '&:hover': {
                borderColor: '#5B7FFF',
            }
        }}
        value={value.toLowerCase()} control={<Radio sx={{ p: .5, display: 'none' }} size='small' />} label={value} />
}