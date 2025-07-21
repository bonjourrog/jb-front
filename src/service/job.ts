import { Filter } from "../entity/filter";
import { Job } from "../entity/job";
import api from "./api";

export const getJobs = async(filters:Filter)=>{
    return (await api.get('job', {params:{...filters}})).data;
}

export const newJob = async(job:Job, token:string)=>{
    return (await api.post('job', job, {headers:{'Authorization':token}})).data
}

export const updateJob = async(job:Job, token:string)=>{   
    return (await api.put('job', job, {headers:{'Authorization':token}})).data
}

export const deleteJob = async(job_id: string, token: string)=>{
    return (await api.delete(`job/${job_id}`, {headers:{'Authorization':token}})).data
}