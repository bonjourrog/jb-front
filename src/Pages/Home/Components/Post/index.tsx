import './Post.css';
import { PostProps } from './Post.props';

const Post:React.FC<PostProps> = ()=>{
    return <section className='post'>
        <div className='post__ls'>
            <h2 className='post__headline'>Publicar empleos</h2>
            <p className='post__caption'>Comienza a encontrar el talento que tu empresa necesita. Regístrate en menos de 2 minutos y publica tu primera vacante</p>
            <button className='post__btn'>Publica un empleo</button>
        </div>
        <div className='post__rs'>
            <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1744506529/jobbank/ysfdhxr2bry2d4ng6nhw.png" alt="post section image" />
        </div>
    </section>
}
export default Post;