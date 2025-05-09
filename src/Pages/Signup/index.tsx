import './Signup.css'
import { SignupProps } from './Signup.props';
// RegistroForm.tsx
import {
    Box,
    Typography,
    
    Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from './schemas/validation.form';
import SignupForm from './Components/SignupForm';
import { RegisterData } from '../../types/user';

const Signup: React.FC<SignupProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterData>({
        resolver: zodResolver(userSchema),
    });

    const onSubmit = (data: RegisterData) => {
        const photo = data.photo[0];
        console.log({ ...data, photo });
    };

    return (
        // Main container
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{
            width:'100%',            
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:'row',
            minHeight:"100vh",
            mx: "auto",
            
            px:'2em'
        }}>
            <span className='absolute top-10 left-10 font-semibold text-[#5d6cf7] text-lg tracking-wide'>
                penasco.io
            </span>
            <Stack
            sx={{
                position:'relative',
                display:{
                    xs:'none',
                    md:'block'
                },
                width:{
                    md:'60%'
                },
                background:'white',
                borderRadius:'.5em',
                overflow:'hidden',
                height:'42em'
            }}
            >
                <Box sx={{
                    position:'absolute',
                    top:'50%',
                    left:'0',
                    width:'100%',
                    transform:'translateY(-50%)'
                }}>
                    <Typography variant="h4" width={400} color='#3f3f3f'  textAlign={'center'} display={'block'} mx={'auto'}>
                        <strong>Registrate</strong> y empieza a buscar <span className='text-[#5d6cf7] font-bold'>empleos</span>
                    </Typography>
                </Box>
                <Box sx={{
                    width:'100%',
                    height:'100%',
                    overflow:'hidden'
                }}>
                    <img className='object-fill w-full' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1746473013/jobbank/signup/dk5thi7iireyyrdaapru.png" alt="side image of register" />
                </Box>
            </Stack>
            <Box sx={{
                    display:{
                        md:'none'
                    },
                    zIndex:'-1',
                    position:'absolute',
                    top:{
                        xs:'-10em',
                        sm:'-20em'
                    },
                    left:'0',
                    width:'100%',
                    height:'42em',
                    overflow:'hidden',
                }}>
                    <img className=' w-full' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1746473013/jobbank/signup/dk5thi7iireyyrdaapru.png" alt="side image of register" />
                </Box>
                <SignupForm register={register} errors={errors}/>
        </Box>
    );
}

export default Signup;