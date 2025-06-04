import { CompanyLogoProps } from "./CompanyLogo.props";

const CompanyLogo: React.FC<CompanyLogoProps> = ({color, job}) => {
    return <div style={{ background: color }} className={`flex items-center justify-center w-16 h-16 max-h-16 max-w-16 rounded-lg overflow-hidden shrink-0`
    }>
        {
            job.company_logo ? <img className='h-full object-cover' src={job.company_logo} alt="" /> : < div className='flex items-center justify-center min-w-12 min-h-12 font-bold text-zinc-700 bg-white rounded-full' > jb </div>
        }
    </div>
}
export default CompanyLogo;