import { Link, useLocation } from 'react-router';
import './Sidebar.css';
import { BiBriefcase, BiHomeAlt } from "react-icons/bi"

const Sidebar = () => {
    const location = useLocation();
    return <aside className='dashboard-sidebar'>
        <ul>
            <li className={ location.pathname === '/dashboard'?'active':''}>
                <Link to={'/dashboard'} className='dashboard-link'>
                    <BiHomeAlt />
                    Home
                </Link>
            </li>
            <li className={ location.pathname === '/dashboard/jobs'?'active':''}>
                <Link to={'/jobs'} className='dashboard-link'>
                    <BiBriefcase />
                    Empleos
                </Link>
            </li>
        </ul>
    </aside>
}
export default Sidebar;