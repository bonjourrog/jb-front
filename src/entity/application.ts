import { Job } from "./job";

export interface Application{
    _id:string;
	user_id: string;
	company_id: string;
	job_id: string;
	status: string;
	applied_at: Date;
    job: Job;
}

