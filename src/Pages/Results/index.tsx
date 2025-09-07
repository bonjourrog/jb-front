import './Results.css';
import { ResultsProps } from "./Results.props";
import { HiOutlineBriefcase } from "react-icons/hi2";
import Filters from './Components/Filters';
import Header from './Components/Header';
import MapSection from './Components/MapSection';
import Jobs from './Components/Jobs';
import { Link } from 'react-router';
import { useAuthStore } from '../../stores/authStore';

const Results: React.FC<ResultsProps> = () => {
    const { isAuthenticated } = useAuthStore();
    return <main className="results">
        <Header />
        <section className='flex h-screen overflow-y-auto'>
            <aside className='left-bar'>
                <section className='flex flex-col items-center justify-center gap-4 w-full h-60 bg-white rounded-3xl'>

                    {isAuthenticated ? <>
                        <div className='w-20 h-20 rounded-full bg-gray-200'></div>
                        <strong className="text-zinc-700">Rogelio Beltran</strong>
                        <Link to={'/user/applied'} className="flex gap-2 items-center text-gray-600 border-t pt-2 text-sm">
                            <HiOutlineBriefcase />
                            ver publicaciones
                        </Link>
                    </> : <p className='text-xl font-bold text-zinc-400'>Inicia sesión</p>}
                </section>
                <Filters />
            </aside>
            <section className='results__content'>
                <MapSection />
                <Jobs />
            </section>
        </section>
    </main>
}
export default Results;