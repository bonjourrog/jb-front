import { FC, useState } from "react";
import { ExperienceFormProps } from "./ExperienceForm.props";
import { Button, Stack, Typography } from "@mui/material";
import CustomTextField from "../../../Signup/Components/CustomeTextField";
import { Controller, useFieldArray } from "react-hook-form";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { BiCalendar } from "react-icons/bi";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { esES } from "@mui/x-date-pickers/locales";
import { DeleteOutline } from "@mui/icons-material";

const ExperienceForm: FC<ExperienceFormProps> = ({ index, setInsertExperience, control, register, watch, remove }) => {
    const bulletField = `experience.${index}.bullets` as any;
    const { fields: bulletFields, append: appendBullet, remove: removeBullet } = useFieldArray({
        control,
        name: bulletField,
    });
    const [showDatePicker, setShowDatePicker] = useState<{ start: boolean, end: boolean }>({ start: false, end: false })
    const CustomActionBar = () => (
        <Stack direction="row" justifyContent="space-between" p={1}>
            <Button onClick={() => { setShowDatePicker({ end: false, start: false }) }}>Ok</Button>
        </Stack>
    );
    return <Stack sx={{ width: '30em', p: 5, borderRadius: 5, gap: 10, bgcolor: 'white', maxHeight:'80dvh', overflow:'scroll'}}>
        <Stack sx={{ gap: 2 }}>
            <CustomTextField placeholder="Puesto" {...register(`experience.${index}.title`)} />
            <CustomTextField placeholder="Empresa" {...register(`experience.${index}.company`)} />
            <Stack direction='row' justifyContent='space-between'>
                <Controller control={control} name={`experience.${index}.startDate`} render={({ field, fieldState }) => (
                    showDatePicker.start ?
                        <div className="absolute bg-black/5 w-full h-full top-0 left-0 z-10 flex flex-col items-center justify-center">
                            <LocalizationProvider adapterLocale="es" localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
                                <StaticDatePicker views={["month", "year"]} slotProps={{ actionBar: {} }} slots={{ actionBar: CustomActionBar }} sx={{
                                    zIndex: 100,
                                    boxShadow: '.3em .3em 1em #00000047'
                                }} value={field.value ? dayjs(field.value) : null} onChange={(v) => field.onChange(v)} />
                            </LocalizationProvider>
                        </div>
                        : <div className="flex items-center" onClick={() => setShowDatePicker({ start: true, end: false })}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 400,
                                fontSize: 16,
                                cursor: 'pointer',
                                px: '.2em',
                                border: '.1em dashed transparent',
                                '&:hover': {
                                    color: '#5570c2',
                                    borderColor: ' #5570c2',
                                    bgcolor: '#f4f6ff'
                                }
                            }}>{field.value ? <>{dayjs(field.value).format("MMMM YYYY")}<BiCalendar /></> : 'Seleccionar fecha'}</Typography>
                        </div>
                )
                }
                />
                <Controller control={control} name={`experience.${index}.endDate`} render={({ field, fieldState }) => (
                    showDatePicker.end ?
                        <div className="absolute bg-black/5 w-full h-full top-0 left-0 z-10 flex flex-col items-center justify-center">
                            <LocalizationProvider adapterLocale="es" localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs}>
                                <StaticDatePicker views={["month", "year"]} slotProps={{ actionBar: {} }} slots={{ actionBar: CustomActionBar }} sx={{
                                    zIndex: 100,
                                    boxShadow: '.3em .3em 1em #00000047'
                                }} value={field.value ? dayjs(field.value) : null} onChange={(v) => field.onChange(v)} />
                            </LocalizationProvider>
                        </div>
                        : <div onClick={() => setShowDatePicker({ start: false, end: true })}>
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 400,
                                fontSize: 16,
                                cursor: 'pointer',
                                px: '.2em',
                                border: '.1em dashed transparent',
                                '&:hover': {
                                    color: '#5570c2',
                                    borderColor: ' #5570c2',
                                    bgcolor: '#f4f6ff'
                                }
                            }}>{field.value ? <>{dayjs(field.value).format("MMMM YYYY")}<BiCalendar /> </> : 'Seleccionar fecha'}</Typography>
                        </div>
                )
                }
                />
            </Stack>
            {bulletFields.map((bf, j) => (
                                <Stack key={bf.id} direction="row" sx={{justifyContent:'space-between', alignItems:'start', width:'100%'}}>
                                    <CustomTextField autoWidth val={watch(`experience.${index}.bullets.${j}`)??''}
                                        sx={{ '& .MuiOutlinedInput-root': {width:'35em', color: '#6c6c6c', fontWeight: 300 }, "& .MuiInputBase-root": { padding: 1 }, }}
                                        {...register(`experience.${index}.bullets.${j}` as const)}
                                        placeholder={`Bullet ${j + 1}`}
                                        multiline
                                        minRows={1}
                                    />
                                    <Button onClick={() => removeBullet(j)}><DeleteOutline sx={{color:'#e54d4d', fontSize:15}}/></Button>
                                </Stack>
                            ))}
                            <Button onClick={() => appendBullet("")}>Agregar bullet</Button>
        </Stack>
        <Stack direction='row' justifyContent='end' gap={2}>
            <Button sx={{ border: '.1em solid #222222', color: '#222222' }} onClick={() =>{
            remove(index);
            setInsertExperience(false)
        }}>Cancelar</Button>
        <Button sx={{ border: '.1em solid #5f5fe1' }} onClick={() => {
                    setInsertExperience(false)
                }}>Aceptar</Button>
        </Stack>
    </Stack>
}
export default ExperienceForm;