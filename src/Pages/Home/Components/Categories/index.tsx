import './Categories.css';
import { CategoriesProps } from './Categories.props';
import { PiHeadsetFill } from "react-icons/pi";

const Categories:React.FC<CategoriesProps> = ()=>{
    return <section className='categories'>
        <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1742173257/jobbank/categories/uvgvfd9tlrgnleftoq4y.png" alt=""/>
        <div className='categories__content'>
            <div className='categories__caption'>
                <h2 className='categories__headline'>Explora por categoria</h2>
                <p>Navega por nuestras categorías y encuentra el trabajo perfecto para ti.</p>
            </div>
            <ul className='categories__list'>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
                <li className='categories__item'>
                    <PiHeadsetFill className='categories__logo'/>
                    <h3 className='font-bold'>Atención al Cliente </h3>
                    <p>Cajero, representante de ventas, servicio...</p>
                    <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                </li>
            </ul>
        </div>
    </section>
}
export default Categories;