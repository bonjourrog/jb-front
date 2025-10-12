import {z} from 'zod';

export const curriculumSchema = z.object({
    'full_name':z.string({message:'campo obligatorio'}),
    'email':z.string({message:'campo obligatorio'}),
    'phone':z.string({message:'campo obligatorio'}),
})