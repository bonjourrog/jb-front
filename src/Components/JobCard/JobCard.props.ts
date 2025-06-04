import { Dispatch, ReactNode, SetStateAction } from "react";
import { Job } from "../../entity/job";

export interface JobCardProps {
    job: Job;
    color: string;
    setShowDetails?: Dispatch<SetStateAction<boolean>>;
    className?: string;
    icon?: ReactNode;
}