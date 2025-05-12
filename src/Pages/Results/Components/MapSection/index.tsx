import './MapSection.css';
import { IoMap } from "react-icons/io5";
const MapSection = () => {
    return <section className="map-section">
            <img className='map-section__image' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1747016485/jobbank/results/map-bg.png" alt="" />
        <div className='map-section__content'>
            <p className='map-section__caption'>Explora empleos cerca de ti</p>
            <button className="map-section__btn">
                Ver mapa
                <IoMap />
            </button>
        </div>
    </section>
}
export default MapSection;