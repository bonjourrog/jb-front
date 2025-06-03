import './Dashboard.css';
import { useAuthStore } from "../../stores/authStore";
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';

const Dashboard = () => {
    const { } = useAuthStore()
    return <main className="dashboard">
        <Sidebar />
        <section className='dashboard__content'>
            <header>
                <strong className='text-[#1d1c22] font-bold'>Welcome</strong>
            </header>
            <Outlet />
        </section>
    </main>
}
export default Dashboard;