import { toast } from "react-toastify";
import { User } from "../entity/user"
import { signup } from "../service/auth";
import { useState } from "react";

export const useCreateUser = ()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const createUser = async(user:Partial<User>)=>{
        setIsLoading(true)
        try {
            const response = await signup(user);
            toast.success('Usuario creado con éxito',{
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                theme: 'light',
            });
            return response
        } catch (error:any) {
            toast.error(error?.response?.data?.error || 'Error al crear usuario');
            throw error; 
        }finally{
            setIsLoading(false)
        }
    }
    return {createUser, isLoading}
}