import { Job } from "../../../../entity/job";
import { ApplicationStatus } from "../../../../types/application";

export interface AppDetailsProps{
    job: Job;
    status: ApplicationStatus;
}