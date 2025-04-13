import './HIW.css';
import { HITProps } from './HIW.props';

const HIW:React.FC<HITProps> = ()=>{
    return <section className='hiw'>
        <header className='hiw__header'>
            <h2>¿Cómo funciona?</h2>
            <p>Encontrar tu nuevo empleo con nosotros no fue tan sencillo</p>
        </header>
        <section className='step'>
            <div className='step__desc'>
                <strong>
                    <span className='text-[#B3B1FE] mr-4'>#1</span>
                    Regístrate en Minutos
                </strong>
                <br />
                <p>Comienza tu camino hacia el empleo ideal. Regístrate en menos de 2 minutos y accede a las mejores oportunidades en Puerto Peñasco.</p>
            </div>
            <div className='step__img'>
                <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744509908/jobbank/hiw/wrwbgudcrdboilkxuufk.png" alt="" />
            </div>
        </section>
        <section className='step'>
            <div className='step__img'>
                <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744510956/jobbank/hiw/wkjs3a1xlpkkw9xvjpk4.png" alt="" />
            </div>
            <div className='step__desc'>
                <strong>
                    <span className='text-[#B3B1FE] mr-4'>#2</span>
                    Busca Empleos en tu Área
                </strong>
                <br />
                <p>Encuentra empleos que se ajusten a tus habilidades y preferencias. ¡Tenemos oportunidades para todos!</p>
            </div>
        </section>
        <section className='step'>
            <div className='step__desc'>
                <strong>
                    <span className='text-[#B3B1FE] mr-4'>#3</span>
                    Aplica con un Solo Clic
                </strong>
                <br />
                <p>Aplica a las vacantes que más te gusten con un solo clic. ¡Es así de fácil!</p>
            </div>
            <div className='step__img'>
                <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744511081/jobbank/hiw/jm4xrxvetusjcaxvrwg5.png" alt="" />
            </div>
        </section>
        <section className='step'>
            <div className='step__img'>
                <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744511289/jobbank/hiw/jeutyyvuu1dpf3vzjozi.png" alt="" />
            </div>
            <div className='step__desc'>
                <strong>
                    <span className='text-[#B3B1FE] mr-4'>#4</span>
                    Recibe Notificaciones
                </strong>
                <br />
                <p>No te pierdas ninguna oportunidad. Recibe alertas personalizadas directamente en tu correo o en la plataforma.</p>
            </div>
        </section>
    </section>
}
export default HIW;