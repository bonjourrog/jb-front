import { z } from "zod";
export const userSchema = z.object({
    name: z.string().min(2, "Nombre muy corto"),
    last_name: z.string().min(2, "Apellido muy corto"),
    email: z.string().email("Correo inválido"),
    phone: z.string().min(10, "Teléfono inválido"),
    password: z.string().min(6, "La contraseña es muy corta"),
    confirmPassword: z.string(),
    // location: z.string().min(2, "Ubicación requerida"),
    // photo: z
    //     .instanceof(FileList)
    //     .refine((files) => files.length > 0, "Se requiere una foto"),
}).refine(data=>data.password===data.confirmPassword,{
    path:["confirmPassword"],
    message:'Las contraseñas no coinciden'
});