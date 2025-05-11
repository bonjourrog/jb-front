import { User } from "../entity/user";
import api from "./api"

export const signup = async(user:Partial<User>)=>{
    return await api.post('auth/signup', user);
}
export const signin = async(credentials:{email:string, password:string})=>{
    return (await api.post('auth/signin', credentials)).data;
}