import './JobCard.css';
import { HiMapPin } from "react-icons/hi2";
import { Job } from "../../entity/job";
import { HiCash } from "react-icons/hi";
import { JobCardProps } from "./JobCard.props";
import { useJobStore } from "../../stores/jobStore";
import CompanyLogo from "../../Pages/Results/Components/CompanyLogo";

const JobCard: React.FC<JobCardProps> = ({ job, color, setShowDetails, className, icon, showCompanyInfo }) => {
    const {setJob} = useJobStore();
    const handleJobSelected = (job: Job) => {
        setJob(job)
        if(setShowDetails){
            setShowDetails(true)
        }
    }
    return <li key={job._id} className={`job ${className ?? ''}`} onClick={() => handleJobSelected(job)}>
        <CompanyLogo color={color} job={job} />
        {icon?? undefined}
        <div className='job__content'>
            <ul className='job__company'>
                <li>{job.industry}</li>·
                <li>{job.company_name}</li>
            </ul>
            <strong>{job.title}</strong>
            <p className='job__date'>{new Date(job.created_at).toDateString()}</p>
            <p className='job__short-desc'>{job.short_description}</p>
            <ul className='job__details'>
                <li>{job.contract_type}</li>
                <li className='job__detail'>
                    <HiMapPin />
                    colonia
                </li>
                <li className='job__detail'>
                    <HiCash />
                    {Math.trunc(job.salary).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}
                </li>
            </ul>
        </div>
    </li>
}
export default JobCard;