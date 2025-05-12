import './Header.css';
import {  SearchOutlined } from '@mui/icons-material';
import { TbMessage2 } from "react-icons/tb";
import { MdOutlineNotifications } from "react-icons/md";
import { useEffect, useState } from 'react';
import { BiFilter } from 'react-icons/bi';
const Header = ()=>{
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const handleInnerWidth = ()=>{
        setInnerWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleInnerWidth);
        return ()=>window.removeEventListener('resize', handleInnerWidth);
    },[])
    return <header className='results-header'>
            <span className='results-header__logo'>Penasco.io</span>
            <div className='search'>
                <label htmlFor="searchbox">
                    <SearchOutlined className='search__icon'/>
                    <input type="text" placeholder='Buscar empleo' id='searchbox'/>
                </label>
                <button>Buscar</button>
                <div className='filters-btn'>
                    <BiFilter/>
                </div>
            </div>
            <ul className='user-menu'>
                
                    {
                        innerWidth>900
                        ?<li className='user-notification'>
                            <TbMessage2 className='user-notification__icon'/>Notificaciones
                        </li>
                        :<li className='user-notification'>
                            <MdOutlineNotifications size={20} className='user-notification__icon'/>
                        </li>
                    }
                <li className='user-options'>R</li>
            </ul>
        </header>
}
export default Header;