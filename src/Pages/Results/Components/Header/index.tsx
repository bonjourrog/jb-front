import './Header.css';

import { TbMessage2 } from "react-icons/tb";
import { MdOutlineNotifications } from "react-icons/md";
import { useEffect, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { HiOutlineLogout } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { useAuthStore } from '../../../../stores/authStore';
import { Link, useNavigate } from 'react-router';
import SearchBox from './Components';
const Header = () => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuthStore()
    const open = Boolean(anchorEl);
    const handleInnerWidth = () => {
        setInnerWidth(window.innerWidth);
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        logout();
        handleClose();
        navigate('/login');
    };
    useEffect(() => {
        window.addEventListener('resize', handleInnerWidth);
        return () => window.removeEventListener('resize', handleInnerWidth);
    }, [])
    return <header className='results-header'>
        <span className='results-header__logo'>Penasco.io</span>
        <SearchBox />
        {isAuthenticated ?
            <ul className={`user-menu ${open ? 'bg-white rounded-t-xl' : ''}`}>

                {
                    innerWidth > 900
                        ? <li className='user-notification'>
                            <TbMessage2 className='user-notification__icon' />Notificaciones
                        </li>
                        : <li className='user-notification'>
                            <MdOutlineNotifications size={20} className='user-notification__icon' />
                        </li>
                }
                <li>
                    <button className='user-options' id="user-button"
                        aria-controls={open ? 'user-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} onClick={handleClick}>R</button>
                </li>
                <li className={`menu-options ${open ? 'h-48 shadow-lg' : 'h-0'}`}>
                    <ul className='option-list'>
                        <li className='border-t'></li>
                        <li className='option-list__item' onClick={handleClose}><BiUser />Perfil</li>
                        <li className='option-list__item' onClick={handleClose}><IoSettingsOutline />Ajustes</li>
                        <li className='option-list__item--plan'>
                            Plan Basico
                            <button className='p-2 rounded-md bg-blue-200 text-blue-500'>Actualizar</button>
                        </li>
                        <li className='option-list__item' onClick={handleLogout}><HiOutlineLogout />Cerrar sesión</li>
                    </ul>
                </li>

            </ul>
            : <ul className='flex gap-3 items-center'>
                {/* Uncoment this when user are allowed to register */}
                {/* <Link to={'/login'} ><li className='cursor-pointer hover:text-indigo-600'>Iniciar sesión</li></Link> */}
                <Link to={'/login'} ><li className='cursor-pointer bg-indigo-500 text-white p-2 px-4 rounded-full'>Iniciar sesión</li></Link>
                {/* <li className='cursor-pointer bg-indigo-500 text-white p-2 px-4 rounded-full'>
                    <Link to={'/signup'}>Registrate</Link>
                </li> */}
            </ul>
        }
        {open ? <div onClick={handleClose} className={`absolute w-screen h-screen bg-zinc-500 z-10 opacity-0 p-0 m-0`}></div> : undefined}
    </header>
}
export default Header;