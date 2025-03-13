import { Link } from 'react-router';
import './Header.css';
import { HeaderProps } from "./Headr.props";
import { Link as LinkScroll } from 'react-scroll';

const Header:React.FC<HeaderProps> = ()=>{
    return <header className="header">
        <span>Empleos<p>PP</p></span>
        <ul className='menu'>
            <li><LinkScroll to='home' smooth duration={500} spy>Menu</LinkScroll></li>
            <li><LinkScroll to='category' smooth duration={500} spy>Categories</LinkScroll></li>
            <li><LinkScroll to='hiw' smooth duration={500} spy>¿Cómo funciona?</LinkScroll></li>
        </ul>
        <div>
            <Link to={""}>Iniciar sesión</Link>
            <Link className='register-btn' to={""}>Registrarse</Link>
        </div>
    </header>
}
export default Header;