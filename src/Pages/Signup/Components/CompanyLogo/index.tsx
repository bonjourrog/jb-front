import { Box, Button, Stack, styled } from "@mui/material";
import { ChangeEvent, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {PhotoOutlined } from "@mui/icons-material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CompanyLogoProps } from "./CompanyLogo.props";

const CompanyLogo:React.FC<CompanyLogoProps> = ({})=>{
    const [imagePreview, setImagePreview] = useState<string>('');

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <Box display={'flex'}>
        {imagePreview && (
            
            <Box
                onClick={()=>{setImagePreview('')}}
                sx={{
                    position:'relative',
                    width:'7em',
                    height:'7em',
                    borderRadius: 5,
                    display: 'block',
                    cursor:'pointer',
                    overflow:'hidden',
                    background:`url(${imagePreview})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    "::after":{
                        content: '""',
                        display:'none',
                        position:'absolute',
                        left:'0em',
                        top:'0em',
                        bottom:'0',
                        width:'100%',
                        height:'100%',
                        background:'rgba(0,0,0,0.4)',
                        zIndex:2
                    },
                    ":hover":{
                        "::after":{
                            display:'block'
                        }
                    },
                    '& .icon-overlay': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    opacity: 0,
                    zIndex: 3,
                    transition: 'opacity 0s',
                    },
                    '&:hover .icon-overlay': {
                    opacity: 1,
                    },
                }}
            >
                <DeleteIcon className="icon-overlay" fontSize="medium" />
            </Box>
        )}
        {!imagePreview && (
            <Stack gap={2}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{
                            background: '#ededed',
                            boxShadow: 'none',
                            borderRadius: 5,
                            width: '7em',
                            height: '7em',
                            margin:'0 auto',
                            display:'flex',
                            border:'.1em dashed gray',
                            ":hover": { boxShadow: '.0em .3em 1em rgba(0, 0, 0, 0.2)' }
                        }}
                        startIcon={<PhotoOutlined sx={{color: 'gray'}} />}
                    >
                        <VisuallyHiddenInput
                            type="file"
                            onChange={(event) => handleFileChange(event)}
                            accept="image/*"
                        />
                    </Button>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{
                            borderRadius: '50em',
                            background: 'white',
                            border: '.1em solid #5f5f5f',
                            color: '#5f5f5f',
                            boxShadow: 'none',
                            fontSize: '.6em'
                        }}
                        startIcon={<CloudUploadIcon />}
                    >
                        Logo de la empresa
                        <VisuallyHiddenInput
                            type="file"
                            onChange={(event) => handleFileChange(event)}
                            accept="image/*"
                        />
                    </Button>
            </Stack>
        )}
        </Box>
    )
}
export default CompanyLogo;