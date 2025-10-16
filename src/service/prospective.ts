import { Prospect } from "../entity/prospect"
import api from "./api"

export const registerProspect = async (prospect:Prospect)=>{
    return (await api.post('prospective', prospect)).data
}