import { FormControlLabel, FormGroup } from "@mui/material";
import SwitchComponent from "../SwitchComponent";
import { memo } from "react";
import { Job } from "../../../../../../entity/job";
import { useJobs } from "../../../../../../hooks/useJobs";
import { Filter } from "../../../../../../entity/filter";
import { NewJobData } from "../../../../../../types/job";
import { MoreVert } from "@mui/icons-material";
import { useJobStore } from "../../../../../../stores/jobStore";

const JobRow = ({ job, filters, setStateMenu }: {
        job: Job, 
        filters: Filter, 
        setStateMenu: (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => void;
    }) => {
    const { updateJob } = useJobs(filters);
    const jobs = useJobStore(state => state.jobs);
    const setJobs = useJobStore(state => state.setJobs);
    const handleToggle = async (event: React.ChangeEvent<HTMLInputElement>, job_id: string) => {
        const newJobs = jobs.map(job => {
            if (job._id === job_id) {
                return { ...job, published: event.target.checked };
            }
            return job;
        });
        setJobs(newJobs);
        const job: Job = jobs.filter(j => j._id === job_id)[0];
        const JobToUpdate: NewJobData = { ...job, published: event.target.checked, salary: `${job.salary}` };
        await updateJob(JobToUpdate);
    }
    return <tr key={job._id}>
        <td className='hover:bg-gray-100' onClick={(event) => {
            setStateMenu(event)
        }}>

            <div className='flex gap-2 justify-center items-start'>
                <MoreVert className='text-gray-400' />
            </div>
        </td>
        <td className='editable'>
            <strong>{job.title}</strong>
        </td>
        <td className='editable hidden md:table-cell'>
            <p className='text-zinc-500'>
                {Math.trunc(job.salary).toLocaleString('en-US', { style: 'currency', currency: 'usd', minimumFractionDigits: 0 })}
            </p>
        </td>
        <td className='editable hidden lg:table-cell'>
            <div className='flex gap-2'>
                {job.benefits.map(benefit => (
                    <p key={benefit} className='px-2 py-1 text-xs text-emerald-600 bg-emerald-200 rounded-sm'>{benefit}</p>
                ))}
            </div>
        </td>
        <td className='editable w-10'>
            <FormGroup>
                <FormControlLabel
                    control={<SwitchComponent sx={{ m: 1 }} checked={job.published} onChange={(e) => { handleToggle(e, job._id) }} />}
                    label=""
                />
                {job.published}
            </FormGroup>
        </td>
    </tr>
}


export default memo(JobRow);