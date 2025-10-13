import { Box,styled, TextField, TextFieldProps } from "@mui/material";
import { useForm } from "react-hook-form";
import { curriculumSchema } from "./curriculum.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod';

const StyledField = styled((props: TextFieldProps) => (
        <TextField {...props} />
    ))(({ theme }) => ({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'transparent',
                borderRadius: '.5em',
                '&:hover': { borderColor: '#c9c9c9' },
                '&.Mui-focused': { borderColor: '#4257e3' },
                '&.Mui-error': { borderColor: theme.palette.error.main },
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

export default function Curriculum() {
    const {
        // control,
        register,
        // reset,
        handleSubmit,
        watch,
        // setValue,
        // formState: { errors },
    } = useForm<z.infer<typeof curriculumSchema>>({
        resolver: zodResolver(curriculumSchema),
        defaultValues: {
            full_name:'',
            email:'',
            phone:''
        },
    });
    // const watchedFields = watch();

    const allValues = watch();
    return <Box component={'form'} onSubmit={handleSubmit(()=>{})} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', margin: '0 auto', padding: 6 }}>
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap:1,
                    width: 300,
                    border:'.2em solid #F1F5F9',
                    borderRadius: 5,
                    padding: 2
                }}>
                <div className="block min-w-20 min-h-20 rounded-full bg-emerald-300"></div>
                <div className="flex flex-col items-center gap-0">
                    <StyledField
                        size="small"
                        sx={{ color: 'red', 
                            width: `${Math.min((allValues.full_name || '').length * 0.84, 28)}ch`,
                            minWidth: '15ch'
                        }}
                        slotProps={{
                            inputLabel: { shrink: false },
                            htmlInput: {
                                style: {
                                    fontWeight: '900',
                                    padding:'.2em .3em'
                                }
                            }
                        }}
                        placeholder="Nombre Completo"
                        {...register("full_name")}
                    />
                    <StyledField
                        size="small"
                        sx={{
                            color: 'red',
                            width: `${Math.min((allValues.email || '').length * 0.84, 28)}ch`,
                            minWidth: '15ch'
                        }}
                        slotProps={{
                            inputLabel: { shrink: false },
                            htmlInput: {
                                style: {
                                    fontSize: 13,
                                    color:'#a1a1aa',
                                    fontFamily: '"Kode Mono", monospace',
                                    fontStyle:'italic',
                                    padding:'.2em .3em'
                                }
                            }
                        }}
                        placeholder="Correo electronico"
                        {...register("email")}
                    />
                    <StyledField
                        size="small"
                        sx={{
                            color: 'red',
                            width: `${Math.min((allValues.phone || '').length * 0.89, 28)}ch`,
                            minWidth: '7ch'
                        }}
                        slotProps={{
                            inputLabel: { shrink: false },
                            htmlInput: {
                                style: {
                                    fontSize: 13,
                                    color:'#a1a1aa',
                                    fontFamily: '"Kode Mono", monospace',
                                    fontStyle:'italic',
                                    padding:'.2em .3em'
                                }
                            }
                        }}
                        placeholder="Telefono"
                        {...register("phone")}
                    />
                </div>
                <Box>
                    <div className="w-full flex flex-col items-center">
                        <p className="font-bold">15</p>
                            <p className="text-xs text-zinc-400">Postulaciones</p>
                        </div>
                    </Box>
            </Box>
            <Box sx={{width:'80%'}}></Box>
        </Box>
    </Box>
}