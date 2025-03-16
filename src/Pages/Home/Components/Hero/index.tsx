import './Hero.css';
import { HeroProps } from './Hero.props';
import { FiSearch } from "react-icons/fi";

const Hero:React.FC<HeroProps> = ()=>{
    return <section className='hero'>
        <div className='hero__ls'>
            <p className='hero__headline'>
                Miles de <br />
                <span className='text-[#777CE4]'>oportunidades</span><br />
                a tu alcance
            </p>
            <small className='hero__subheadline'>Explora ofertas laborales, <br />
            encuentra el puesto que se adapta a ti.</small>
            <div className='hero__search'>
                <input className='hero__search-box' type="text" />
                <button className='hero__search-btn'><FiSearch/></button>
            </div>
        </div>
        <div className='hero__rs'>
            <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1741841474/jobbank/hero/ni5fwbq0aignifikbwmk.png" alt="pictures of persons working"/>
        </div>
    </section>
}
export default Hero;