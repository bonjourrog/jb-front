import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material"
import CustomTextField from "../CustomeTextField"
import { AccountCircleOutlined, EmailOutlined, PasswordOutlined, PhoneOutlined } from "@mui/icons-material"
import { SignupFormProps } from "./SignupForm.props"
import { useState } from "react";


const SignupForm: React.FC<SignupFormProps> = ({ register, errors }) => {
    const [registrationType, _] = useState<boolean>(true);
    
    return <Stack spacing={2} sx={{
        width: {
            xs: '100%',     // móviles
            sm: '80%',    // tablet
            md: '60%',    // laptop
            lg: '40%',    // desktop
        },
        px: {
            md: '3em'
        },
        alignItems: 'center'
    }}>
        {registrationType?
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'start', justifyContent:'start', width:'100%', paddingBottom:'1em', gap:'.3em'}}>
                <Typography variant="h4" color='#4f4f4f' textAlign={'left'} fontWeight={'bold'}>Registro</Typography>
                <Typography variant="caption"
                    sx={{
                        display:'block',
                        width:'30em',
                        color: '#4f4f4f',
                        textAlign: 'left'
                    }}>
                    Registrate ahora y empieza a explorar todos los empleos que tenemos para ti.
                </Typography>
            </Box>
        :undefined}

        {/* {!registrationType?<CompanyLogo register={register} errors={errors}/>:undefined} */}
        

        {/* Fields just for user type */}
        {registrationType?
        <Box sx={{
            display: 'flex',
            gap: '1em'
        }}>
            <CustomTextField
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined sx={{ color: '#ababab' }} />
                            </InputAdornment>
                        )
                    }
                }}
                label="Nombre"
                fullWidth
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
            />
            <CustomTextField
                label="Apellido"
                fullWidth
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined sx={{ color: '#ababab' }} />
                            </InputAdornment>
                        )
                    }
                }}
                {...register("last_name")}
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
            />
        </Box>:undefined}
        {/* {!registrationType?<CustomTextField
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <BiBuilding color='#ababab' size={20}/>
                            </InputAdornment>
                        )
                    }
                }}
                label="Nombre de la empresa"
                {...register("name")}
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
            />:undefined} */}
        <CustomTextField
            label="Correo electrónico"
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailOutlined sx={{ color: '#ababab' }} />
                        </InputAdornment>
                    )
                }
            }}
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
        />
        <CustomTextField
            label="Telefono"
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <PhoneOutlined sx={{ color: '#ababab' }} />
                        </InputAdornment>
                    )
                }
            }}
            {...register('phone')}
            error={!!errors.phone}
            helperText={errors.phone?.message}
        />
        <CustomTextField
            label="Contraseña"
            fullWidth
            type='password'
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordOutlined sx={{ color: '#ababab' }} />
                        </InputAdornment>
                    )
                }
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
        />
        <CustomTextField
            label="Confirme la contraseña"
            fullWidth
            type='password'
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <PasswordOutlined sx={{ color: '#ababab' }} />
                        </InputAdornment>
                    )
                }
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
        />

        <Button type="submit" variant="contained" sx={{
            display: 'block',
            padding: '.7em 0',
            background: '#5d6cf7',
            borderRadius: '.5em',
            boxShadow: 'none',
            width: '50%',
        }}>
            Registrarse
        </Button>
        {/* <Typography variant="body1" display={'flex'} gap={1}>
            <p>Necesitas una cuenta como {registrationType?<strong>empresa?</strong>:<strong>usuario?</strong>}</p>
            <Typography  sx={{cursor:'pointer', color:'#5d6cf7', textDecoration:'underline'}}  onClick={()=>setRegistrationType(!registrationType)}>haz click aquí</Typography>
        </Typography> */}
        
    </Stack>
}
export default SignupForm;