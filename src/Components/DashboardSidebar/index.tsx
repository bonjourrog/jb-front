import './DashboardSidebar.css';
import { BiBriefcase } from "react-icons/bi"

const DashboardSidebar = ()=>{
    return <aside className='dashboard-sidebar'>
            <ul>
                <li>
                    <BiBriefcase/>
                    Empleos
                </li>
            </ul>
        </aside>
}
export default DashboardSidebar;