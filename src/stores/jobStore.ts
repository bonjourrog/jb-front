import { create } from "zustand";
import { Job, Pagination } from "../entity/job";
import { Filter } from "../entity/filter";

interface JobState {
    jobs: Job[];
    job: Job;
    pagination: Pagination;
    setPagination: (pagination: Pagination) => void;
    setJob: (job: Job) => void;
    setJobs: (jobs: Job[]) => void;
    updateJobs: (updatedJob: Job) => void;
    filters: Filter;
    setFilters: (filters: Filter) => void;
}

export const useJobStore = create<JobState>(set => ({
    jobs: [],
    job: {} as Job,
    filters: {
        search: '',
        schedule: '',
        contract: '',
        industry: '',
        company_id: '',
        user_id: ''
    },
    pagination:{} as Pagination,
    setPagination: (pagination: Pagination) => {
        set({ pagination })
    },
    setFilters: (filters: Filter) => {
        set({ filters })
    },
    setJob: (job: Job) => {
        set({ job })
    },
    setJobs: (jobs: Job[]) => {
        set({ jobs })
    },
    updateJobs: (updatedJob: Job) => {
        set((state) => ({
            jobs: state.jobs.map(job =>
                job._id === updatedJob._id ? { ...job, ...updatedJob } : job
            )
        }))
    }
}))