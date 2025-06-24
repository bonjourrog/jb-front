import { Filter } from "../entity/filter";
import { Job } from "../entity/job";
import api from "./api";

export const getJobs = async(filters:Filter)=>{
    return (await api.get('job', {params:{...filters}})).data;
}

export const newJob = async(job:Job, token:string)=>{
    return (await api.post('job', job, {headers:{'Authorization':token}})).data
}