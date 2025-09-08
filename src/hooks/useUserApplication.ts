import { useState } from "react";
import { getUserApplications } from "../service/application";
import { toast } from "react-toastify";
import { useAuthStore } from "../stores/authStore";
import { applyJob as applyJobService } from "../service/application";
import { useJobStore } from "../stores/jobStore";

export const useUserApplication = () => {
    const { token } = useAuthStore();
    const {jobs, setJobs} = useJobStore()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getApplication = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error("Algo salió mal, recargue la página");
                return { data: null, error: null, status: "success" };
            }
            const data = await getUserApplications(token)
            return { data, error: null, status: "success" };
        } catch (error: any) {
            const message = error?.response?.data?.error || 'Error al obtener aplicaciones';
            toast.error(message);
            return { data: null, error: null, status: "success" };
        }
        finally {
            setIsLoading(false);
        }
    }
    const applyJob = async (job_id: string) => {
        if (!token) {
            toast.error("Algo salió mal, recargue la página");
            return;
        }
        try {
            await applyJobService(job_id, token);
            const newJobs = jobs.filter(job => job._id !== job_id);
            setJobs(newJobs);
            toast.success("Aplicación enviada correctamente");
        } catch (error: any) {
            // Traducción de errores comunes
            const apiError = error?.response?.data?.message || '';

            let errorMsg = 'Error al aplicar al empleo';
            if (apiError.includes('already applied')) {
                errorMsg = 'Ya has aplicado a este empleo';
                toast.info(errorMsg);
                return
            } else if (apiError.includes('not found')) {
                errorMsg = 'El empleo no existe';
            } else if (apiError.includes('token')) {
                errorMsg = 'Sesión expirada, inicia sesión de nuevo';
            }
            toast.error(errorMsg);
        }
    }
    return { getApplication, applyJob, isLoading };
}