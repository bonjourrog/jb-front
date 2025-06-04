import './Jobs.css';
import { useState } from "react";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { useJobStore } from '../../../../stores/jobStore';
import Details from '../Details';
import JobCard from '../../../../Components/JobCard';

const Jobs = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const {job} = useJobStore();
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
                        <JobCard color={color} job={job} setShowDetails={setShowDetails}/>
                )
                })
            }
        </ul>
    </section>
}
export default Jobs;