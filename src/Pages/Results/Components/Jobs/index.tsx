import './Jobs.css';
import { useEffect, useState } from "react";
import { useJobs } from "../../../../hooks/useJobs";
import { useJobStore } from '../../../../stores/jobStore';
import Details from '../Details';
import JobCard from '../../../../Components/JobCard';
import { useAuthStore } from '../../../../stores/authStore';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { Pagination, Stack } from '@mui/material';

const Jobs = () => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const job = useJobStore(state => state.job);
    const jobs = useJobStore(state => state.jobs);
    const filters = useJobStore(state => state.filters);
    const setFilters = useJobStore(state => state.setFilters);
    const { token } = useAuthStore();
    const pagination = useJobStore(s => s.pagination);


    const colorGenerator = (): string => {
        const hue = Math.floor(Math.random() * 360);         // 0–360
        const saturation = Math.floor(Math.random() * 20) + 60; // 60–80%
        const lightness = Math.floor(Math.random() * 15) + 60;  // 60–75%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setFilters({
            ...filters,
            page: `${value}`
        });
    };

    useEffect(() => {

        if (token) {
            const decoed: any = jwt_decode(token);
            setFilters({
                ...filters,
                user_id: decoed.userId
            })
        }
    }, [token])

    useJobs(filters);

    return <section className='jobs'>
        <strong>Recientes</strong>
        <Details job={job} setShowDetails={setShowDetails} showDetails={showDetails} />
        <ul className={`list ${showDetails ? 'list--with-details' : 'list--without-details'}`}>
            {
                jobs?.length > 0 ? jobs.map(job => {
                    const color = colorGenerator()
                    job.color = color;
                    return (
                        <JobCard showCompanyInfo={false} color={color} job={job} setShowDetails={setShowDetails} />
                    )
                }) : <div style={{ textAlign: 'center', padding: '2rem', color: '#555' }}>
                    <span style={{ fontSize: '3rem', display: 'block' }}>😔</span>
                    <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                        ¡No hay vacantes disponibles por ahora!
                    </p>
                    <p>Vuelve más tarde para ver nuevas oportunidades.</p>
                </div>
            }
        </ul>
        <Stack sx={{ alignItems: 'center', width: '100%', marginTop: '1rem' }}>
            <Pagination 
            
            onChange={handlePageChange} count={pagination.total_pages} variant="outlined" color="primary" shape="rounded" />
        </Stack>
    </section>
}
export default Jobs;