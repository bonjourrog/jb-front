import { useEffect, useState } from 'react';
import './Categories.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { CategoriesProps } from './Categories.props';
import { Category } from '../../../../types/categories';
import { CATEGORIES_DATA_MOCK } from '../../../../data/categories';

const Categories:React.FC<CategoriesProps> = ()=>{
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [categories, _] = useState<Category[]>(CATEGORIES_DATA_MOCK);
    const handleInnerWidth = ()=>{
        setInnerWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize", handleInnerWidth);
        return ()=> window.removeEventListener("resize", handleInnerWidth);
    }, [])
    return <section className='categories'>
        <img src="https://res.cloudinary.com/dcezb5utw/image/upload/v1742173257/jobbank/categories/uvgvfd9tlrgnleftoq4y.png" alt=""/>
        <div className='categories__content'>
            <div className='categories__caption'>
                <h2 className='categories__headline'>Explora por categoria</h2>
                <p>Navega por nuestras categorías y encuentra el trabajo perfecto para ti.</p>
            </div>
            <ul className='categories__list'>
                {
                    innerWidth > 500 ? 
                        categories.map(category=><li key={category.id} className='categories__item'>
                            {category.icon}
                            <h3 className='font-bold'>{category.title}</h3>
                            <p>{category.description}</p>
                            <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                        </li>)
                    :  <div className='flex flex-col gap-10'>
                        <Slide infinite canSwipe easing='cubic-out'>
                            {categories.slice(0, 4).map(category=><li key={category.id} className='categories__item mx-5 text-zinc-800'>
                                {category.icon}
                                <h3 className='font-bold'>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                            </li>)}
                        </Slide>
                        <Slide infinite canSwipe easing='cubic-out'>
                            {categories.slice(4, 8).map(category=><li key={category.id} className='categories__item mx-5 text-zinc-800'>
                                {category.icon}
                                <h3 className='font-bold'>{category.title}</h3>
                                <p>{category.description}</p>
                                <span className='text-white bg-[#777CE4] px-4 py-2 rounded-full'>10 trabajos</span>
                            </li>)}
                        </Slide>
                </div>
                }
            </ul>
        </div>
    </section>
}
export default Categories;