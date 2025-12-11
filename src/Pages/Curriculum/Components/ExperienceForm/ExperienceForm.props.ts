import { Control, UseFieldArrayRemove, UseFormRegister, UseFormWatch } from "react-hook-form";
import { curriculumSchema } from "../../curriculum.schema";
import { z } from "zod";
import { Dispatch, SetStateAction } from "react";


type FormSchema = z.infer<typeof curriculumSchema>;

export interface ExperienceFormProps{
    index:number;
    setInsertExperience:Dispatch<SetStateAction<boolean>>;
    control:Control<FormSchema>;
    register:UseFormRegister<FormSchema>;
    watch:UseFormWatch<FormSchema>;
    remove:UseFieldArrayRemove
}