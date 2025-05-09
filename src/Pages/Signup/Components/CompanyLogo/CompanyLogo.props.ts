import { FieldErrors, UseFormRegister } from "react-hook-form";
import { RegisterData } from "../../../../types/user";

export interface CompanyLogoProps{
    register:UseFormRegister<RegisterData>, 
    errors:FieldErrors<RegisterData>
}