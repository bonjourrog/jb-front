import { SignupProps } from './Signup';
import './Signup.css';

const Signup:React.FC<SignupProps> = ()=>{
    return <section className='signup'>
        <div className='signup__rs'>
            <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744491079/jobbank/signup/zml9jzerzwrgftne2agy.png" alt=" map image of the city"/>
        </div>
        <div className='signup__ls'>
            <h2 className='signup__headline'>Registrate y <br /> Explora</h2>
            <p className='leading-relaxed'>Explora todos los empleos <br />que tenemos para ti. <br />
            Registrate ahora.</p>
            <button className='signup__btn'>Registrate</button>
        </div>
    </section>
}
export default Signup;