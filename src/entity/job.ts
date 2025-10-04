import { ContractType, Industry, Schedule } from "../types/job";

export interface Job {
    _id: string;
    title: string;
    short_description: string;
    description: string;
    salary: number;
    benefits: string[];
    location: Location;
    industry: Industry;
    schedule: Schedule;
    contract_type: ContractType;
    is_formal_job: boolean;
    published: boolean;
    company_id: string;
    company_name?:string;
    company_logo?:string;
    color?:string;
    created_at: Date;
    updated_at: Date;
}
export interface Location {
    type: string;               // always "Point"
    coordinates: number[] // [longitude, latitude]
}

export interface Pagination{
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
}

export interface JobResponse extends Pagination{
    data: Job[];
    message: string;
}