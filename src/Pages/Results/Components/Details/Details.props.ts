import { Dispatch, SetStateAction } from "react";
import { Job } from "../../../../entity/job";

export interface DetailsProps{
    showDetails: boolean;
    setShowDetails: Dispatch<SetStateAction<boolean>>;
    job:Job;
}