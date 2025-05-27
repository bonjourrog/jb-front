import { HiMapPin } from 'react-icons/hi2';
import CompanyLogo from '../CompanyLogo';
import './Details.css';
import { DetailsProps } from "./Details.props";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiCash } from 'react-icons/hi';
import { useAuthStore } from '../../../../stores/authStore';

const Details: React.FC<DetailsProps> = ({ showDetails, setShowDetails, job }) => {
    const {isAuthenticated} = useAuthStore()
    return <div className={`details ${showDetails ? 'details--hide' : 'details--show'}`}>
        <button onClick={() => setShowDetails(!showDetails)} className='details__return-btn'>
            <FaArrowLeftLong />
            Regresar
        </button>
        <div>
            {job ? <ul className='flex flex-col items-start gap-4 p-4'>
                <div className='flex gap-4'>
                    <CompanyLogo color={`${job.color}`} job={job} />
                    <div className='flex flex-col gap-1'>
                        <ul className='job__company'>
                            <li>{job.industry}</li>·
                            <li>{job.company_name}</li>
                        </ul>
                        <strong>{job.title}</strong>
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
                </div>
                <button className='px-3 py-1 rounded-full bg-[#777CE4] font-bold  text-white'>Postular</button>
                <ul className='flex gap-2'>
                    {
                        job.benefits?job.benefits.map(benefit=>(
                        <li className='px-2 py-1 font-semibold text-xs rounded-md text-emerald-600 bg-emerald-200'>{benefit}</li>
                    )):undefined
                    }
                </ul>
                <p>{job.description}</p>
            </ul> : <div>
                Seleccione un trabajo
            </div>}
        </div>
    </div>
}
export default Details;