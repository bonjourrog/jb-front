import './Results.css';
import { ResultsProps } from "./Results.props";
import { HiOutlineBriefcase } from "react-icons/hi2";
import Filters from './Components/Filters';
import Header from './Components/Header';
import MapSection from './Components/MapSection';

const Results:React.FC<ResultsProps> = ()=>{
    return <main className="results">
        <Header/>
        <section className='flex h-screen overflow-y-auto'>
            <aside className='left-bar'>
                <section className='flex flex-col items-center justify-center gap-4 w-full h-60 bg-white rounded-3xl'>
                    <div className='w-20 h-20 rounded-full bg-gray-200'></div>
                    <strong className="text-zinc-700">Rogelio Beltran</strong>
                        {/* <hr className='w-3/4'/> */}
                    <button className="flex gap-2 items-center text-gray-600 border-t pt-2 text-sm">
                        <HiOutlineBriefcase/>
                        ver publicaciones
                    </button>
                </section>
                <Filters/>
            </aside>
            <section className='w-full'>
                <MapSection/>
                <section></section>
            </section>
        </section>
    </main>
}
export default Results;