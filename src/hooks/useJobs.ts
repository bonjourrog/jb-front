import { useEffect, useState } from "react"
import { Job } from "../entity/job";
import { getJobs, newJob, updateJob as updateJobService, deleteJob as deleteJobService } from "../service/job";
import { Filter } from "../entity/filter";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuthStore } from "../stores/authStore";
import { toast } from "react-toastify";
import { NewJobData } from "../types/job";
import { useJobStore } from "../stores/jobStore";

export const useJobs = (filters: Filter) => {
    const { token } = useAuthStore();
    // const [jobs, setJobs]= useState<Job[]>([])
    const {setJobs, updateJobs} = useJobStore();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const createJob = async (data: NewJobData): Promise<any> => {
        if (!token) {
            toast.error("Algo salio mal, recargue la pagina");
            return;
        }
        try {
            const decoded: any = jwt_decode(token!);
            const userId: string = decoded.userId;
            const _newJob: Partial<Job> = { ...data, salary: Number(data.salary), company_id: userId }
            const response = await newJob(_newJob as Job, token)
            toast.success("Empleo creado correctamente");
            return response;
        } catch (error: any) {
            toast.error(error?.response?.data?.error || 'Error al crear el empleo');
        }
    }

    const updateJob = async(job:NewJobData)=>{
        if (!token) {
            toast.error("Algo salio mal, recargue la pagina");
            return;
        }
        try {
            const _newJob: Partial<Job> = { ...job, salary: Number(job.salary)}
            const response = await updateJobService(_newJob as Job, token);
            toast.success("Empleo actualizado correctamente");
            updateJobs(_newJob as Job);
            return response;
        } catch (error:any) {
            toast.error(error?.response?.data?.error || 'Error al modificar el empleo');
        }
    }
    
    const deleteJob = async(job_id: string)=>{
        if (!token) {
            toast.error("Algo salio mal, recargue la pagina");
            return;
        }
        try {
            const response = await deleteJobService(job_id, token)
            toast.success('empleo eliminado correctamente')
            return response
        } catch (error:any) {
            console.log(error);
            
            toast.error(error?.response?.data?.error || 'Error al eliminar el empleo');
        }
    }

    useEffect(() => {
        if(Object.keys(filters).length===0)return;
        getJobs(filters).then(response => {
            const {data} = response;
            setJobs(data);
        })
            .catch(e => setError(e.message || 'Error al cargar empleos'))
            .finally(() => setIsLoading(false));
    }, []);

    return {createJob, updateJob, deleteJob, isLoading, error}
}