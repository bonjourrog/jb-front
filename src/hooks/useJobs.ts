import { useEffect, useState } from "react"
import { Job } from "../entity/job";
import { getJobs, newJob } from "../service/job";
import { Filter } from "../entity/filter";
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuthStore } from "../stores/authStore";
import { toast } from "react-toastify";
import { NewJobData } from "../types/job";

export const useJobs = (filters: Filter) => {
    const { token } = useAuthStore();
    const [jobs, setJobs] = useState<Job[]>([]);
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

    useEffect(() => {
        getJobs(filters).then(response => {
            const data = response;
            if (Array.isArray(data.data)) {
                console.log('hola');

                setJobs(data.data);
            } else {
                console.warn('No es un array:', data.data);
            }
        })
            .catch(e => setError(e.message || 'Error al cargar empleos'))
            .finally(() => setIsLoading(false))
    }, []);
    return {createJob, jobs, isLoading, error}
}