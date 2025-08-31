import { useState } from "react";
import { getUserApplications } from "../service/application";
import { toast } from "react-toastify";

export const useUserApplication = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getApplication = async() => {
        setIsLoading(true);
        try{
            const token = localStorage.getItem('token');
            if(!token){
                toast.error("Algo salió mal, recargue la página");
                return { data:null, error: null, status: "success" };
            }
            const data = await getUserApplications(token)
            return { data, error: null, status: "success" };
        }catch(error:any){
            const message = error?.response?.data?.error || 'Error al obtener aplicaciones';
            toast.error(message);
            return { data:null, error: null, status: "success" };
        }
        finally{
            setIsLoading(false);
        }
    }
    return {getApplication, isLoading};
}