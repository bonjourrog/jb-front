import { z } from "zod";
import { userSchema } from "../Pages/Signup/schemas/validation.form";

export type RegisterData = z.infer<typeof userSchema>;