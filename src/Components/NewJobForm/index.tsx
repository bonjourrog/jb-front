import './newJobForm.css';
import { Controller, useForm } from "react-hook-form";
import { contractTypes, industries, Industry, NewJobData, schedules } from "../../types/job";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema } from "./schemas/validation.form";
import { Autocomplete, Box, Button, Chip, InputAdornment, MenuItem, Select, Stack, Typography } from "@mui/material";
import { Job } from "../../entity/job";
import CustomTextField from "../../Pages/Signup/Components/CustomeTextField";
import { AttachMoney, Description, ListAlt, Storefront, Title } from "@mui/icons-material";
import { useState } from "react";

const JobListForm = () => {
    const [industry, setIndustry] = useState<Industry | ''>('');

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<NewJobData>({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            title: '',
            short_description: '',
            description: '',
            salary: '',
            benefits: [], // 👈 este es el que importa para evitar el error
            industry: industries[0],
            schedule: schedules[0],
            contract_type: contractTypes[0],
        },
    });

    const onSubmit = async (data: NewJobData) => {
        console.log(data);

        // const newJob: Partial<Job> = { ...data }
    };

    return <Box component="form" onSubmit={handleSubmit(onSubmit)} className='new-job-form'>
        <Stack spacing={2} sx={{
            width: '100%',
            px: {
                md: '3em'
            },
            alignItems: 'center'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '1em'
            }}>
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '2em',
                    textAlign: 'center'
                }}>Nuevo empleo</Typography>
                <CustomTextField
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Title sx={{ color: '#ababab' }} />
                                </InputAdornment>
                            )
                        }
                    }}
                    label="Nombre"
                    fullWidth
                    {...register("title")}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />
                <CustomTextField
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney sx={{ color: '#ababab' }} />
                                </InputAdornment>
                            )
                        }
                    }}
                    label="Salario"
                    fullWidth
                    {...register("salary")}
                    error={!!errors.salary}
                    helperText={errors.salary?.message}
                />
                <Stack sx={{
                    display: 'flex',
                    flexDirection: {
                        xs:'column',
                        sm:'row'
                    },
                    justifyContent: 'space-between',
                    gap: '1em'
                }}>
                    <CustomTextField
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Description sx={{ color: '#ababab' }} />
                                    </InputAdornment>
                                )
                            }
                        }}
                        multiline
                        rows={3}
                        label="Descripcion larga"
                        fullWidth
                        {...register("description")}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                    />
                    <CustomTextField
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Description sx={{ color: '#ababab' }} />
                                    </InputAdornment>
                                )
                            }
                        }}
                        multiline
                        rows={3}
                        label="Descripcion corta"
                        fullWidth
                        {...register("short_description")}
                        error={!!errors.short_description}
                        helperText={errors.short_description?.message}
                    />
                </Stack>
                <Controller
                    name="benefits"
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            multiple
                            freeSolo
                            options={[]}
                            value={field.value ?? []}
                            onChange={(_, newValue) => field.onChange(newValue)}
                            renderValue={(value: readonly string[], getTagProps) =>
                                value.map((option: string, index: number) => (
                                    <Chip
                                        variant="outlined"
                                        label={option}
                                        {...getTagProps({ index })}
                                    />
                                ))
                            }
                            renderInput={(params: any) => (
                                <CustomTextField
                                    {...params}
                                    InputProps={{
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
                                    label="Beneficios"
                                    error={!!errors.benefits}
                                    helperText={errors.benefits?.message}
                                />
                            )}
                        />
                    )}
                />
                <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            options={industries}
                            value={industry}
                            onInputChange={(_, newInputValue) => setIndustry(newInputValue as Industry)}
                            onChange={(_, newValue) => field.onChange(newValue)}
                            renderInput={(params) => (
                                <CustomTextField
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Storefront sx={{ color: '#ababab' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Indistria"
                                    fullWidth
                                    error={!!errors.industry}
                                    helperText={errors.industry?.message}
                                />
                            )}
                        />
                    )}
                />
                <Stack sx={{
                    display: 'flex',
                    flexDirection: {
                        xs:'column',
                        sm:'row'
                    },
                    gap: '1em',
                }}>
                    <Controller
                        name="schedule"
                        control={control}
                        render={({ field }) => (
                            <Select
                            sx={{borderColor: '#e0e0e0',
            borderRadius:'1em',}}
                                {...field}
                                fullWidth
                                displayEmpty
                                error={!!errors.schedule}
                            >
                                <MenuItem value="" disabled>Seleccione un horario</MenuItem>
                                {schedules.map((s) => (
                                    <MenuItem key={s} value={s}>{s}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    <Controller
                        name="contract_type"
                        control={control}
                        render={({ field }) => (
                            <Select
                            sx={{borderColor: '#e0e0e0',
            borderRadius:'1em',}}
                                {...field}
                                fullWidth
                                displayEmpty
                                error={!!errors.contract_type}
                            >
                                <MenuItem value="" disabled>Seleccione tipo de contrato</MenuItem>
                                {contractTypes.map((ct) => (
                                    <MenuItem key={ct} value={ct}>{ct}</MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                </Stack>
                <Stack sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '1em'
                }}>
                    <Button 
                        sx={{ width: '50%', background: 'transparent', border:'.1em solid #c9c9c9', color:'gray', boxShadow:'none', p:'1em',  borderRadius:'1em'}} 
                        variant="contained">Cancelar</Button>
                    <Button 
                        sx={{ width: '50%', background: '#6266F1', boxShadow:'none', borderRadius:'1em' }} variant="contained" color="error" type="submit">Crear</Button>
                </Stack>
            </Box>
        </Stack>
    </Box>
}
export default JobListForm;