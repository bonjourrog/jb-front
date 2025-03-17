import './Header.css';
import { Link } from 'react-router';
import { HeaderProps } from "./Headr.props";
import { Link as LinkScroll } from 'react-scroll';
import { useEffect, useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Header:React.FC<HeaderProps> = ()=>{
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [toggle, setToggle] = useState<boolean>(false);
    const handleInnerWidth = ()=>{
        setInnerWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', handleInnerWidth);
        return ()=> window.removeEventListener('resize', handleInnerWidth);
    },[])
    return <header className="header" style={{left:innerWidth < 800 && !toggle ? '150%' : '50%'}}>
        {
            innerWidth < 800 ? <>
                <HiMenuAlt3 onClick={()=>{setToggle(true)}} className='menu__btn'/>
                <MdOutlineClose onClick={()=>{setToggle(false)}} className='menu__btn menu__btn--close'/>
            </>: undefined
        }
        <span className='logo'>Empleos<p>PP</p></span>
        <ul className='menu'>
            <li><LinkScroll onClick={()=>{setToggle(false)}} to='home' smooth duration={500} spy>Menu</LinkScroll></li>
            <li><LinkScroll onClick={()=>{setToggle(false)}} to='category' smooth duration={500} spy>Categories</LinkScroll></li>
            <li><LinkScroll onClick={()=>{setToggle(false)}} to='hiw' smooth duration={500} spy>¿Cómo funciona?</LinkScroll></li>
        </ul>
        <div className='header__actions'>
            <Link to={""}>Iniciar sesión</Link>
            <Link className='register-btn' to={""}>Registrarse</Link>
        </div>
    </header>
}
export default Header;