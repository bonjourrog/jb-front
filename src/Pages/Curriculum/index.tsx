import { Autocomplete, Button, Chip, InputAdornment, Stack, styled, TextField, TextFieldProps, Typography } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { curriculumSchema } from "./curriculum.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { useAuthStore } from "../../stores/authStore";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import {BiPlus } from "react-icons/bi";
import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");
import { useState } from "react";
import ExperienceForm from "./Components/ExperienceForm";
import { GoDotFill } from "react-icons/go";
import CustomTextField from "../Signup/Components/CustomeTextField";
import { DeleteOutline, ListAlt, SignalCellularAlt, Translate } from "@mui/icons-material";



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
    const [insertExperience, setInsertExperience] = useState<boolean>(false)
    const [insertLangue, setInsertLanguage] = useState<boolean>(false)
    const { token } = useAuthStore();
    const decode: any = jwt_decode(token!);
    const {
        control,
        register,
        // reset,
        handleSubmit,
        watch,
        formState:{errors}
        // setValue,
        // formState: { errors },
    } = useForm<z.infer<typeof curriculumSchema>>({
        resolver: zodResolver(curriculumSchema),
        defaultValues: {
            resume: '',
            experience: [
                // { title: '', company: '', current: true, startDate: new Date(), endDate: new Date(), bullets: [""], }
            ],
            skills:[],
            languages:[]
        },
    });
    const { fields, append, remove } = useFieldArray({ control, name: 'experience' });
    const { fields:langFields, append:langAppend, remove:langRemove } = useFieldArray({ control, name: 'languages' });
    const experienceValues = watch('experience');
    const languagesValues = watch('languages');

    return <Stack color="#444444" sx={{ maxHeight: '100%', overflowY: 'scroll', position: 'relative', pb: 5 }}>
        <Stack sx={{ alignItems: 'center', width: '40em', margin: '0 auto' }}>
            <Typography fontWeight='bold' color="#3a3a3a" variant="h3">{decode.userName}</Typography>
            <Typography variant="body1">{decode.email}</Typography>
            <Button className="flex justify-center items-center gap-2"><BiPlus />Agregar enlaces</Button>
        </Stack>
        <hr className="my-5 w-[40em] mx-auto" />
        <Stack width='40em' margin='0 auto' component='form'>
            <Stack>
                <Typography fontWeight={600} variant="h6">Resumen</Typography>
                <StyledField sx={{ borderRadius: '1em' }} placeholder='Resumen' multiline minRows={1} {...register('resume')} />
            </Stack>
            <hr className="my-5 w-[100%] mx-auto" />
            <Stack sx={{gap:2}}>
                <Typography fontWeight={600} variant="h6">Experiencia</Typography>
                <ul className="flex flex-col gap-5">
                    {experienceValues?.map((field, i) => {
                        return <li key={i}>
                            <ul className="flex flex-col gap-2">
                                <li className="flex justify-between text-zinc-700">
                                    <div className="flex gap-1">
                                        <p className="font-bold">{field.title},</p>
                                        <p className="text-zinc-600 italic">{field.company}</p>
                                    </div>
                                    <div className="flex gap-2 text-sm italic text-zinc-600">
                                        <p>{dayjs(field.startDate).format("MMM YYYY")}</p>-
                                        <p>{dayjs(field.endDate).format("MMM YYYY")}</p>
                                    </div>
                                </li>
                                <li className="flex flex-col gap-2">
                                    {field.bullets.map(elem=><p className="flex items-center gap-2">
                                        <GoDotFill size={10}/>
                                        {elem}
                                    </p>)}
                                </li>
                            </ul>
                        </li>
                    })}
                </ul>
                <Button sx={{ border: '.1em solid #5f5fe1' }} onClick={() => {
                    setInsertExperience(true)
                    append({ title: '', company: '', current: true, startDate: new Date(), endDate: new Date(), bullets: ['']})
                }}>Agregar experiencia</Button>
                {
                    insertExperience ?
                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-950/5 z-10">
                            <ExperienceForm remove={remove} watch={watch} index={fields.length-1} setInsertExperience={setInsertExperience} control={control} register={register} />
                        </div>
                        : null
                }
                <Stack gap={2}>
                    <Typography fontWeight={600} variant="h6">Habilidades</Typography>
                    <Controller
                    name="skills"
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            multiple
                            freeSolo
                            options={[]}
                            value={field.value ?? []}
                            onChange={(_, newValue) => field.onChange(newValue)}
                            renderValue={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => {
                                    const { key, ...tagProps } = getTagProps({ index });
                                    return <Chip
                                        sx={{borderRadius:3, border:'.1em solid #5964ff', bgcolor:'#f2f3ff', color:'#2d2d2d'}}
                                        key={key}
                                        variant="outlined"
                                        label={option}
                                        {...tagProps}
                                    />
                                })
                            }
                            renderInput={(params: any) => (
                                <StyledField
                                    {...params}
                                    slotProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <>
                                                <InputAdornment position="start">
                                                    <ListAlt sx={{ color: '#ababab' }} />
                                                </InputAdornment>
                                                {params.InputProps.startAdornment}
                                            </>
                                        ),
                                    }}
                                    label="Habilidades"
                                    error={!!errors.skills}
                                    helperText={errors.skills?.message}
                                />
                            )}
                        />
                    )}
                />
                </Stack>
                <Stack gap={1}>
                    <Typography fontWeight={600} variant="h6">Idiomas</Typography>
                    <ul className="flex flex-col gap-2">
                        {languagesValues?.map((lang, index)=>(
                            <li key={`${lang.language}-${index}`} className="flex gap-2">
                                <p className="font-semibold text-zinc-700">{lang.language}</p>-
                                <p className="italic font-light">{lang.level}</p>
                                <Button onClick={() => langRemove(index)}><DeleteOutline sx={{color:'#e54d4d', fontSize:15}}/></Button>
                            </li>
                        ))}
                        {
                            insertLangue?
                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-950/5 z-10">
                                <Stack sx={{bgcolor:'white', width:500, borderRadius:3, p:5, gap:2}}>
                                    <Typography fontWeight={600} variant="h6">Idiomas</Typography>
                                    <Stack direction='row' gap={2}>
                                        <CustomTextField {...register(`languages.${langFields.length-1}.language`)} label='Language' slotProps={{
                                            input:{
                                                startAdornment:(
                                                    <Translate sx={{fontSize:20, color:'#6a6a6a', mr:2}}/>
                                                )
                                            }
                                        }}/>
                                        <CustomTextField {...register(`languages.${langFields.length-1}.level`)} label='Nivel' slotProps={{
                                            input:{
                                                startAdornment:(
                                                    <SignalCellularAlt sx={{fontSize:20, color:'#6a6a6a', mr:2}}/>
                                                )
                                            }
                                        }}/>
                                    </Stack>
                                    <Stack direction='row' justifyContent='end' gap={2}>
                                        <Button onClick={()=>{
                                            setInsertLanguage(false);
                                            langRemove(langFields.length-1)
                                        }} sx={{
                                            border:'.1em solid #4e4e4e',
                                            color:'#4e4e4e'
                                        }}>Cancelar</Button>
                                        <Button onClick={()=>{
                                            setInsertLanguage(false)
                                        }} sx={{
                                            border:'.1em solid #6370c9',
                                            color:'#6370c9'
                                        }}>Aceptar</Button>
                                    </Stack>
                                </Stack>                            
                            </div>
                            :null
                        }
                        <Button onClick={()=>{
                            langAppend({language:'', level:''})
                            setInsertLanguage(true)}
                        }>agregar language</Button>
                    </ul>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
} 