import { z } from "zod";
import { userSchema } from "../Pages/Signup/schemas/validation.form";
import { loginSchema } from "../Pages/Signin/schemas/login";

export type RegisterData = z.infer<typeof userSchema>;
export type LoginData = z.infer<typeof loginSchema>