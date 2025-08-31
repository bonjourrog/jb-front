import { Link, Outlet } from "react-router";
import { UserLayoutProps } from "./user.props";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiAccountCircle2Line } from "react-icons/ri";
import { PiPasswordBold } from "react-icons/pi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

const UserLayout: React.FC<UserLayoutProps> = () => {
    return <main className="flex min-h-screen min-w-screen">
        <nav className="flex flex-col justify-between items-center min-h-full w-48 pl-0 pr-0 pt-28 pb-10" style={{boxShadow:'.3em .3em 1em rgba(0,0,0,0.1)'}}>
            <ul className="flex flex-col gap-2 text-blue-500">
                <li>Perfil
                    <ul className="flex flex-col mt-2 font-normal text-zinc-500">
                        <li className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <RiAccountCircle2Line />
                            Ver prefil
                        </li>
                        <li>
                            <Link  className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg" to={'/user/applied'}>

                                <LuListTodo />
                                Postulaciones
                            </Link>
                        </li>
                        <li className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <MdOutlineBookmarkBorder />
                            Guardadas
                        </li>
                        <li className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <PiPasswordBold />
                            Contraseña
                        </li>
                    </ul>
                </li>
                <li>Configuracion
                    <ul className="flex flex-col mt-2 font-normal text-zinc-500">
                        <li className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <MdOutlineNotificationsNone />
                            Notificaciones
                        </li>
                        <li className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-100 hover:text-blue-500 rounded-lg">
                            <LuSettings />
                            Cuenta
                        </li>
                    </ul>
                </li>
            </ul>
            <button className="px-2 py-1 rounded-lg bg-red-100 text-red-400">Cerrar sesion</button>
        </nav>
        <section className="flex flex-col flex-1">
            <header className="w-full p-10 bg-white">
                Bienvenido
            </header>
            <Outlet/>
        </section>
    </main>;
}
export default UserLayout;