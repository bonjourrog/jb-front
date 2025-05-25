export interface Job {
    _id: string;
    title: string;
    short_description: string;
    description: string;
    salary: number;
    benefits: string[];
    location: Location;
    industry: string;
    schedule: string;
    contract_type: string;
    is_formal_job: boolean;
    published: boolean;
    company_id: string;
    company_name?:string;
    company_logo?:string;
    created_at: Date;
    updated_at: Date;
}
export interface Location {
    type: string;               // always "Point"
    coordinates: number[] // [longitude, latitude]
}