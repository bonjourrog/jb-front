import api from "./api";

export const getUserApplications = async (token: string) => {
    return (await api.get('application/user', { headers: { 'Authorization': token } })).data;
}