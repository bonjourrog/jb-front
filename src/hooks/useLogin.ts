import { useState } from "react"
import { useAuthStore } from "../stores/authStore";
import { signin } from "../service/auth";
import { toast } from "react-toastify";

export const useLogin = ()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const login = useAuthStore(s=>s.login);

    const handleLogin = async(credentials:{email:string, password:string})=>{
        try {
            setIsLoading(true)
            const {data:token} = await signin(credentials)
            login(token)
            toast.success(`Bienvenido !`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                theme: 'light',
            });
        } catch (error:any) {
            toast.error(error?.response?.data?.error || 'Error al iniciar sesión');
        }finally{
            setIsLoading(false);
        }
    }
    return {handleLogin, isLoading}
}