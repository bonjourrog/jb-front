import './Dashboard.css';
import { useAuthStore } from "../../stores/authStore";

const Dashboard = ()=>{
    const {} = useAuthStore()
    return <main className="dashboard">
        <aside className='dashboard__sidebar'></aside>
        <section className='dashboard__content'>
            <header>
                <strong className='text-zinc-700 font-bold'>Welcome</strong>
            </header>
            {/* some cards with ingo */}
            <section className='dashboard__cards'>
                <ul>
                    <li>h</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            {/* some charts */}
            <section className='dashboard__charts'>
                <div></div>
            </section>
            {/* a list of user that are appliying */}
            <section className='dashboard__recent-applicants'>
                <div>
                    
                </div>
            </section>
        </section>
    </main>
}
export default Dashboard;