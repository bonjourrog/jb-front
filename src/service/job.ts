import { Filter } from "../entity/filter";
import api from "./api";

export const getJobs = async(filters:Filter)=>{
    return (await api.get('job', {params:{...filters}})).data;
}