export interface Curriculum{
    _id: string;
    studies:Studies;
    cvs:CVS[];
}
interface Studies{
    university: string;
    career: string;
    initial_date:Date;
    finish_date:Date;
}
interface Experience{
    title:string;
    Company_name:string;
    initial_date:Date;
    finish_date:Date;
    description:string;
    skills_tools:string;
}
interface CVS{
    _id:string;
    is_primary:boolean;
    experience:Experience[];
}