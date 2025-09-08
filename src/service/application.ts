import api from "./api";

export const getUserApplications = async (token: string) => {
    return (await api.get('application/user', { headers: { 'Authorization': token } })).data;
}
export const applyJob = async(job_id: string, token: string)=>{
    return (await api.post(`application/${job_id}/apply`, {}, {headers:{'Authorization':token}})).data
}