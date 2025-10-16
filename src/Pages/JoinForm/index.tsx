import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    MenuItem,
    Alert,
    Chip,
    Paper
} from '@mui/material';
import { BiCheckCircle } from 'react-icons/bi';
import { useMask } from '@react-input/mask';
import { useProspect } from '../../hooks/useProspect';

const JoinForm = () => {
    const { registerProspective } = useProspect();
    const [submitted, setSubmitted] = useState(false);
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            company_name: '',
            contact_name: '',
            email: '',
            phone: '',
            company_size: '',
            vacancies: ''
        }
    });

    const onSubmit = async (data: any) => {
        data.phone = data.phone.replace(/\s+/g, '');
        const response = await registerProspective(data)
        if(!response){
            return
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            reset();
        }, 5000);
    };

    const beneficios = [
        'Publica vacantes sin costo durante el periodo de lanzamiento',
        'Acceso directo a candidatos verificados y calificados',
        'Panel de gestión intuitivo y fácil de usar',
        'Soporte personalizado para empresas colaboradoras',
        'Participa en el desarrollo de nuevas funcionalidades'
    ];

    const tamanosEmpresa = [
        { value: '1-10', label: '1-10 empleados' },
        { value: '11-50', label: '11-50 empleados' },
        { value: '51-200', label: '51-200 empleados' },
        { value: '201-500', label: '201-500 empleados' },
        { value: '500+', label: 'Más de 500 empleados' }
    ];

    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            py: { xs: 6, md: 10 }
        }}>
            {/* Formas flotantes de fondo */}
            <Box sx={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    bgcolor: '#5d6cf7',
                    opacity: 0.05,
                    top: '-100px',
                    right: '10%',
                    animation: 'float 20s infinite ease-in-out',
                    '@keyframes float': {
                        '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                        '50%': { transform: 'translateY(-30px) rotate(180deg)' }
                    }
                }} />
                <Box sx={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    bgcolor: '#5d6cf7',
                    opacity: 0.04,
                    bottom: '10%',
                    left: '-50px',
                    animation: 'float2 15s infinite ease-in-out',
                    '@keyframes float2': {
                        '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                        '50%': { transform: 'translateY(30px) rotate(-180deg)' }
                    }
                }} />
                <Box sx={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    bgcolor: '#5d6cf7',
                    opacity: 0.03,
                    top: '50%',
                    right: '-50px',
                    animation: 'float3 18s infinite ease-in-out',
                    '@keyframes float3': {
                        '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                        '50%': { transform: 'translateY(-20px) rotate(90deg)' }
                    }
                }} />
            </Box>

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 6, md: 12 }} alignItems="center">
                    {/* Contenido izquierdo */}
                    <Grid  >
                        <Box sx={{
                            animation: 'fadeInUp 0.8s ease',
                            '@keyframes fadeInUp': {
                                from: { opacity: 0, transform: 'translateY(30px)' },
                                to: { opacity: 1, transform: 'translateY(0)' }
                            }
                        }}>
                            <Chip
                                label="🚀 PROTOTIPO DISPONIBLE"
                                sx={{
                                    background: 'linear-gradient(135deg, #e8eaff 0%, #d4d8ff 100%)',
                                    color: '#5d6cf7',
                                    fontWeight: 600,
                                    fontSize: '13px',
                                    letterSpacing: '0.5px',
                                    mb: 3,
                                    px: 1
                                }}
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '36px', sm: '48px', md: '56px' },
                                    fontWeight: 700,
                                    color: '#5d6cf7',
                                    mb: 3,
                                    lineHeight: 1.1,
                                    letterSpacing: '-1px'
                                }}
                            >
                                Encuentra el talento que impulsa tu empresa
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{
                                    fontSize: { xs: '18px', md: '20px' },
                                    color: '#546e7a',
                                    mb: 5,
                                    fontWeight: 400
                                }}
                            >
                                Únete a nuestra plataforma y conecta con profesionales calificados buscando su próxima oportunidad laboral.
                            </Typography>

                            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {beneficios.map((beneficio, index) => (
                                    <Box
                                        key={index}
                                        component="li"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            mb: 2,
                                            opacity: 0,
                                            animation: `fadeInUp 0.6s ease ${0.2 + index * 0.1}s forwards`,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: '28px',
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '50%',
                                                bgcolor: '#5d6cf7',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 2,
                                                mt: '2px'
                                            }}
                                        >
                                            <BiCheckCircle size={16} color="white" />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: '17px',
                                                color: '#37474f',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {beneficio}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Formulario */}
                    <Grid>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 4, sm: 6 },
                                borderRadius: '24px',
                                boxShadow: '0 10px 60px rgba(93, 108, 247, 0.12)',
                                border: '.3em solid #e8eaff',
                                animation: 'fadeInUp 0.8s ease 0.3s backwards',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: '#5d6cf7',
                                    fontWeight: 700,
                                    mb: 1.5,
                                    fontSize: { xs: '28px', md: '32px' }
                                }}
                            >
                                Colabora con nosotros
                            </Typography>

                            <Typography
                                sx={{
                                    color: '#78909c',
                                    mb: 4,
                                    fontSize: '16px'
                                }}
                            >
                                Completa el formulario y nos pondremos en contacto
                            </Typography>

                            {!submitted ? (
                                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        name="company_name"
                                        control={control}
                                        rules={{ required: 'Este campo es requerido' }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Nombre de la Empresa *"
                                                error={!!errors.company_name}
                                                helperText={errors.company_name?.message}
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="contact_name"
                                        control={control}
                                        rules={{ required: 'Este campo es requerido' }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Nombre de Contacto *"
                                                error={!!errors.contact_name}
                                                helperText={errors.contact_name?.message}
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: 'Este campo es requerido',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email inválido'
                                            }
                                        }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                type="email"
                                                label="Email Corporativo *"
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="phone"
                                        control={control}
                                        rules={{
                                            required: 'Requerido',
                                            validate: (v) => (v?.replace(/\s/g, '').length === 10) || 'Deben ser 10 dígitos',
                                        }}
                                        render={({ field }) => {
                                            const inputRef = useMask({
                                                mask: '999 999 9999',
                                                replacement: { '9': /\d/ },
                                            });
                                            return <TextField
                                                {...field}
                                                inputRef={inputRef}
                                                fullWidth
                                                type="tel"
                                                label="Teléfono"
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            />
                                        }}
                                    />

                                    <Controller
                                        name="company_size"
                                        control={control}
                                        rules={{ required: 'Este campo es requerido' }}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                select
                                                label="Tamaño de la Empresa *"
                                                error={!!errors.company_size}
                                                helperText={errors.company_size?.message}
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            >
                                                {tamanosEmpresa.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        )}
                                    />

                                    <Controller
                                        name="vacancies"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                type="number"
                                                label="¿Cuántas vacantes planeas publicar?"
                                                placeholder="Ej: 3"
                                                sx={{ mb: 3 }}
                                                InputProps={{
                                                    sx: {
                                                        borderRadius: '12px',
                                                        bgcolor: '#fafafa',
                                                        '&:hover': {
                                                            bgcolor: '#ffffff'
                                                        },
                                                        '&.Mui-focused': {
                                                            bgcolor: '#ffffff'
                                                        }
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: '#37474f',
                                                        fontWeight: 600
                                                    }
                                                }}
                                            />
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            py: 2.25,
                                            borderRadius: '12px',
                                            fontSize: '17px',
                                            fontWeight: 600,
                                            textTransform: 'none',
                                            background: 'linear-gradient(135deg, #5d6cf7 0%, #4a59d9 100%)',
                                            boxShadow: '0 4px 20px rgba(93, 108, 247, 0.3)',
                                            '&:hover': {
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 8px 30px rgba(93, 108, 247, 0.4)',
                                                background: 'linear-gradient(135deg, #5d6cf7 0%, #4a59d9 100%)',
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Quiero Colaborar
                                    </Button>
                                </Box>
                            ) : (
                                <Alert
                                    icon={<BiCheckCircle />}
                                    severity="success"
                                    sx={{
                                        borderRadius: '12px',
                                        bgcolor: '#e8eaff',
                                        color: '#5d6cf7',
                                        border: '1px solid #c5cbff',
                                        '& .MuiAlert-icon': {
                                            color: '#5d6cf7'
                                        }
                                    }}
                                >
                                    ¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.
                                </Alert>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default JoinForm;