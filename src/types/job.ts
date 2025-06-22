import { z } from 'zod';
import { jobSchema } from "../Components/NewJobForm/schemas/validation.form";

export type NewJobData = z.infer<typeof jobSchema>;

export const industries = [
    "Tecnología", "Salud", "Educación", "Marketing", "Finanzas",
    "Ingeniería", "Arte y Diseño", "Ventas", "Recursos Humanos", "Logística",
    "Manufactura", "Retail", "Turismo y Hospitalidad", "Medios de Comunicación",
    "Consultoría", "Legal", "Construcción", "Energía", "Investigación y Desarrollo",
    "Administración Pública", "Alimentos y Bebidas", "Agricultura", "Transporte",
    "Servicios Profesionales", "Deportes y Ocio", "Telecomunicaciones", "E-commerce",
    "Startups", "Non-profit / ONG"
] as const;

export type Industry = typeof industries[number];

export const schedules = ["nocturno", "vespertino", "matutino", "rotativo"] as const;

export type Schedule = typeof schedules[number];

export const contractTypes = ["medio tiempo", "tiempo completo", "practicante", "temporal", "proyecto", "freelance"] as const;

export type ContractType = typeof contractTypes[number];