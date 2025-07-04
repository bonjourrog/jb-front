import { Dispatch, SetStateAction } from "react";
import { Job } from "../../entity/job";

export interface NewJobFormProps {
    jobData: Job | null;
    setShowForm: Dispatch<SetStateAction<boolean>>;
}