import { Job } from "./job";

interface AppFields{
	_id:string;
	user_id: string;
	company_id: string;
	job_id: string;
	status: string;
	applied_at: Date;
}
export type Application = AppFields & Job;

