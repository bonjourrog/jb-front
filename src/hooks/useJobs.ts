import { useEffect, useState } from "react"
import { Job } from "../entity/job";
import { getJobs } from "../service/job";
import { Filter } from "../entity/filter";

export const useJobs = (filters: Filter) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
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
    return { jobs, isLoading, error }
}