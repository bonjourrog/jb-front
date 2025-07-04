import { create } from "zustand";
import { Job } from "../entity/job";

interface JobState{
    jobs:Job[];
    job: Job;
    setJob:(job: Job)=>void;
    setJobs:(jobs:Job[])=>void;
    updateJobs:(updatedJob:Job)=>void;
}

export const useJobStore = create<JobState>(set=>({
    jobs:[],
    job:{} as Job,
    setJob:(job:Job)=>{
        set({job})
    },
    setJobs:(jobs:Job[])=>{
        set({jobs})
    },
    updateJobs:(updatedJob:Job)=>{
        set((state)=>({
            jobs: state.jobs.map(job=>
                job._id===updatedJob._id ?{...job, ...updatedJob}:job
            )
        }))
    }
}))