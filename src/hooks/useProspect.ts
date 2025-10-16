import { useState } from "react";
import { registerProspect } from "../service/prospective";
import { Prospect } from "../entity/prospect";
import { toast } from "react-toastify";

export const useProspect = ()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const registerProspective = async(prospect:Prospect):Promise<boolean>=>{
        setIsLoading(true);
        try {
            const response = await registerProspect(prospect)
            if (response?.data?.error) {
                toast.error(response.data.error || 'Ocurrió un error');
                return false;
            }
            return true
        } catch (err: any) {
            const serverMsg = err?.response?.data?.error || err?.message;
            toast.error(serverMsg || 'Algo salió mal, recarga la página');
            return false
        }finally{
            setIsLoading(false);
        }
    }
    return {isLoading, setIsLoading, registerProspective}
}
