import { styled, TextField, TextFieldProps } from "@mui/material";

const CustomTextField = styled((props: TextFieldProps) => (
    <TextField {...props}/>
))(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            // border:"none",
            // borderBottom:".1em solid",
            borderColor: '#e0e0e0',
            borderRadius:'1em',
        },
        '&:hover fieldset': {
            borderColor: '#c9c9c9',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4257e3',
        },
        '&.Mui-error fieldset': {
            borderColor: theme.palette.error.main,
        },
    },
}));

export default CustomTextField;