import { styled, TextField, TextFieldProps } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";

type CustomTextFieldProps = TextFieldProps & {
    autoWidth?: boolean;
    val?: string;
}

const CustomTextField = styled((props: CustomTextFieldProps) => {
    const { autoWidth, val, ...rest } = props;
    const [w, setW] = useState(600);
    const spanRef = useRef<HTMLSpanElement | null>(null);
    useLayoutEffect(() => {
        if (!spanRef.current) {
            return
        }
        const pw = Math.min(600, Math.max(50, (spanRef.current.offsetWidth ?? 0) + 20));
        setW(pw);
    }, [val]);
    return <>
        <span ref={spanRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', font: 'inherit' }}>
            {val || ' '}
        </span>
        <TextField {...rest} sx={{
            "& .MuiInputBase-input": {
                width: autoWidth ? w : "auto",
                transition: "width 120ms ease",
            },
        }} />
        {/* slotProps={{input:{style:autoWidth?{width:w}:{}}}} */}
    </>
})(({ theme }) => ({
    '& input': { transition: 'width 120ms ease' },
    '& .MuiOutlinedInput-root': {
        minWidth: 100,
        maxWidth: '100%',
        '& fieldset': {
            // border:"none",
            // borderBottom:".1em solid",
            borderColor: '#e0e0e0',
            borderRadius: '1em',
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