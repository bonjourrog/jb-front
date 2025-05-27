import './Jobs.css';
import { useState } from "react";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { HiMapPin } from "react-icons/hi2";
import { HiCash } from "react-icons/hi";
import { useJobStore } from '../../../../stores/jobStore';
import { Job } from '../../../../entity/job';
import CompanyLogo from '../CompanyLogo';
import Details from '../Details';

const Jobs = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const {setJob, job} = useJobStore();
    const [filters, setFilters] = useState<Filter>({
        company_id: '',
        contract: '',
        industry: '',
        schedule: '',
        search: ''
    });
    const colorGenerator = (): string=> {
        const hue = Math.floor(Math.random() * 360);         // 0–360
        const saturation = Math.floor(Math.random() * 20) + 60; // 60–80%
        const lightness = Math.floor(Math.random() * 15) + 60;  // 60–75%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    const handleJobSelected = (job:Job)=>{
        setJob(job)
        setShowDetails(true)
    }
    const { jobs } = useJobs(filters);
    return <section className='jobs'>
        <strong>Recientes</strong>
        <Details job={job} setShowDetails={setShowDetails} showDetails={showDetails}/>
        <ul className={`list ${showDetails ? 'list--with-details' : 'list--without-details'}`}>
            {
                jobs.map(job => {
                    const color = colorGenerator()
                    job.color = color;
                    return (
                    <li key={job._id} className='job' onClick={() => handleJobSelected(job)}>
                        <CompanyLogo color={color} job={job}/>
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
                )
                })
            }
        </ul>
    </section>
}
export default Jobs;