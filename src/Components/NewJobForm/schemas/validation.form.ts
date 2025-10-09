import {z} from 'zod';
import { contractTypes, industries, schedules } from '../../../types/job';
export const jobSchema = z.object({
    "title":z.string().min(5, {message:'El titulo es muy corto'}).max(100, {message:'El titulo es muy largo'}),
    "short_description":z.string().min(17, {message:'El tiene que ser muy corta'}).max(250, {message:'El descripcion es muy larga'}),
    "description":z.string().min(17).max(2500),
    "salary":z.string().min(1, {message:'Este campo es obligatorio'}),
    "benefits": z.array(z.string())
        .min(1, {message:'debe de agregar al menos un benefocio'})
        .max(5,{message:'solo puede agregar 5 beneficios, si necesita mas agregelos en la descriocion'}),
    "industry":z.enum(industries, {message:'seleccione una industria'}),
    "schedule":z.enum(schedules),
    "contract_type":z.enum(contractTypes),
    "published":z.boolean()
})