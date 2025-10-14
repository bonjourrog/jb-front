import { Box, Button, InputAdornment, Stack, Typography } from "@mui/material";
import { SigninProps } from "./Signin.props";
import { useForm } from "react-hook-form";
import { LoginData } from '../../types/user';
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/login";
import CustomTextField from "../Signup/Components/CustomeTextField";
import { EmailOutlined, PasswordOutlined } from "@mui/icons-material";
import {  useNavigate } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { useAuthStore } from "../../stores/authStore";
import { useEffect } from "react";

const Signin: React.FC<SigninProps> = () => {
    const {isAuthenticated, role} = useAuthStore();
    const navigate = useNavigate();
    const {handleLogin} = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginData>({
        resolver: zodResolver(loginSchema)
    });
    const onSubmit = async(credentials:LoginData) => {
        await handleLogin({...credentials});
        
    }
    // if(isAuthenticated)return <Navigate to={'/'}/>
    useEffect(()=>{
        if(role && isAuthenticated){
            switch(role){
                case 'user':
                    navigate('/');
                    break;
                case 'company':
                    navigate('/dashboard');
                    break;
                default:
                    navigate('unauthorized');
            }
        }
    }, [role, navigate, isAuthenticated])
    return <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{
        width: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        minHeight: "100vh",
        mx: "auto",

        px: '2em'
    }}>
        <span className='absolute top-10 left-10 font-semibold text-[#5d6cf7] text-lg tracking-wide'>
            penasco.io
        </span>
        <Stack
            sx={{
                position: 'relative',
                display: {
                    xs: 'none',
                    md: 'block'
                },
                width: {
                    md: '60%'
                },
                background: 'white',
                borderRadius: '.5em',
                overflow: 'hidden',
                height: '42em'
            }}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                transform: 'translateY(-50%)'
            }}>
                <Typography variant="h4" width={400} color='#3f3f3f' textAlign={'center'} display={'block'} mx={'auto'}>
                    <strong>Inicia sesión</strong> y empieza a aplicar a <span className='text-[#5d6cf7] font-bold'>empleos</span>
                </Typography>
            </Box>
            <Box sx={{
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            }}>
                <img className='object-fill w-full' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1746473013/jobbank/signup/dk5thi7iireyyrdaapru.png" alt="side image of register" />
            </Box>
        </Stack>
        <Box sx={{
            display: {
                md: 'none'
            },
            zIndex: '-1',
            position: 'absolute',
            top: {
                xs: '-10em',
                sm: '-20em'
            },
            left: '0',
            width: '100%',
            height: '42em',
            overflow: 'hidden',
        }}>
            <img className=' w-full' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1746473013/jobbank/signup/dk5thi7iireyyrdaapru.png" alt="side image of register" />
        </Box>
        <Stack spacing={2} sx={{
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
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', width: '100%', paddingBottom: '1em', gap: '.3em' }}>
                <Typography variant="h4" color='#4f4f4f' textAlign={'left'} fontWeight={'bold'}>Inicio de sesión</Typography>
                <Typography variant="caption"
                    sx={{
                        display: 'block',
                        width: '30em',
                        color: '#4f4f4f',
                        textAlign: 'left'
                    }}>
                    Inicia Sesión para empezar a explorar todos los empleos que tenemos para ti.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '1em'
            }}>
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
                <Button type="submit" variant="contained" sx={{
                    display: 'block',
                    padding: '1em 0',
                    margin:'0 auto',
                    background: '#5d6cf7',
                    borderRadius: '1em',
                    boxShadow: 'none',
                    width: '50%',
                }}>
                    Iniciar sesión
                </Button>
            </Box>
            {/* <Typography variant="caption" width={400} color='#3f3f3f' textAlign={'center'} display={'block'} mx={'auto'}>
                <strong>Registrate</strong> y empieza a aplicar a˝ <strong>empleos</strong> <Link to='/signup' className='text-[#5d6cf7] font-bold underline'>Click aquí.</Link>
            </Typography> */}
        </Stack>

    </Box>
}
export default Signin;