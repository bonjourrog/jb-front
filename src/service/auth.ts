import { toast } from "react-toastify";
import { User } from "../entity/user";
import api from "./api"

export const signup = async(user:Partial<User>)=>{
    try{
        const {data} = await api.post('auth/signup', user)
        toast.success('Usuario creado con éxito',{
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            theme: 'light',
        });
        return data;
    }catch(error:any){
        toast.error(error?.response?.data?.error || 'Error al crear usuario');
        throw error;
    }
}