import { create } from "zustand";
import { Job } from "../entity/job";

interface JobState{
    job: Job;
    setJob:(job: Job)=>void;
}

export const useJobStore = create<JobState>(set=>({
    job:{} as Job,
    setJob:(job:Job)=>{
        set({job})
    }
}))