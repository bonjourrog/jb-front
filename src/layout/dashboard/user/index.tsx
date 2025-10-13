import './user.css';
import { Link, Outlet, useNavigate } from "react-router";
import { UserLayoutProps } from "./user.props";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiAccountCircle2Line } from "react-icons/ri";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { useAuthStore } from "../../../stores/authStore";
import { SiReaddotcv } from "react-icons/si";

const UserLayout: React.FC<UserLayoutProps> = () => {
    const {logout} = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        logout();
        navigate('/');
    }
    return <main className="user-layout">
        <nav 
            className="user-layout__sidebar" 
            style={{boxShadow:'.3em .3em 1em rgba(0,0,0,0.1)'}}>
            <ul className="flex flex-col gap-4 text-blue-500">
                <li>Perfil
                    <ul className="flex flex-col mt-2 font-normal text-zinc-500">
                        <li className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <RiAccountCircle2Line />
                            Ver prefil
                        </li>
                        <li>
                            <Link  className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg" to={'/user/curriculum'}>

                                <SiReaddotcv />
                                Curriculum
                            </Link>
                        </li>
                        <li>
                            <Link  className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg" to={'/user/applied'}>

                                <LuListTodo />
                                Postulaciones
                            </Link>
                        </li>
                        <li className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <MdOutlineBookmarkBorder />
                            Guardadas
                        </li>
                        <li className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <PiPasswordBold />
                            Contraseña
                        </li>
                    </ul>
                </li>
                <li>Configuracion
                    <ul className="flex flex-col mt-2 font-normal text-zinc-500">
                        <li className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <MdOutlineNotificationsNone />
                            Notificaciones
                        </li>
                        <li className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <LuSettings />
                            Cuenta
                        </li>
                    </ul>
                </li>
            </ul>
            <button onClick={handleLogout} className="px-2 py-1 rounded-lg bg-red-100 text-red-400">Cerrar sesion</button>
        </nav>
        <section className="flex flex-col flex-1 min-w-0">
            <header className="w-full p-10 bg-white">
                Bienvenido
            </header>
            <Outlet/>
        </section>
    </main>;
}
export default UserLayout;