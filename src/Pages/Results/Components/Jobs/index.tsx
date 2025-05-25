import './Jobs.css';
import { useState } from "react";
import { Filter } from "../../../../entity/filter";
import { useJobs } from "../../../../hooks/useJobs";
import { HiMapPin } from "react-icons/hi2";
import { HiCash } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";

const Jobs = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
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
        <div className={`details ${showDetails ? 'details--hide' : 'details--show'}`}>
            <button onClick={() => setShowDetails(!showDetails)} className='details__return-btn'>
                <FaArrowLeftLong />
                Regresar
            </button>
        </div>
        <ul className={`list ${showDetails ? 'list--with-details' : 'list--without-details'}`}>
            {
                jobs.map(job => {
                    const color = colorGenerator()
                    return (
                    <li key={job._id} className='job' onClick={() => setShowDetails(!showDetails)}>
                        <div style={{background:color}} className={`flex items-center justify-center w-16 h-16 max-h-16 max-w-16 rounded-lg overflow-hidden shrink-0`}>
                            {
                                job.company_logo?<img className='h-full object-cover' src={job.company_logo} alt="" />:<div className='flex items-center justify-center min-w-12 min-h-12 font-bold text-zinc-700 bg-white rounded-full'>jb</div>
                            }
                        </div>
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