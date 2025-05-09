import { z } from "zod";
import { schema } from "../Pages/Signup/schemas/validation.form";

export type RegisterData = z.infer<typeof schema>;