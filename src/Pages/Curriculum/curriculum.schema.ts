import { z } from 'zod';

const experienceSchema = z.object({
    title: z.string().min(2, "Título requerido"),
    company: z.string().min(2),
    startDate: z.coerce.date({ required_error: "Fecha inicio" }),
    endDate: z.coerce.date().optional(),
    current: z.boolean(),
    // bullets: z.string().min(1, "Agrega al menos 1 logro"),
    bullets: z.array(z.string().min(2)).min(1, "Agrega al menos 1 logro"),
}).refine(
    (v) => v.current || (v.endDate && v.endDate >= v.startDate),
    { message: "endDate debe ser >= startDate", path: ["endDate"] }
);
const languagesSchema = z.object({
    language: z.string(),
    level:z.string()
});
export const curriculumSchema = z.object({
    resume: z.string({ message: 'campo obligatorio' }),
    experience: z.array(experienceSchema).min(1, "Agrega al menos uan experiencia").optional(),
    skills: z.array(z.string()).max(1,"Agrega almenos una habilidad"),
    languages:z.array(languagesSchema).optional(),
    certifications:z.array(z.string()).optional()
});