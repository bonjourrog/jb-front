import { Element } from "react-scroll";
import Header from "./Components/Header";
import { HomeProps } from "./Home.props";
import Hero from "./Components/Hero";

const Home:React.FC<HomeProps> = ()=>{
    return <div>
        <Element name="home">
            <Header/>
            <Hero/>
        </Element>
        <br />
        <div className="bg-red-300 w-screen h-[50em]"></div>
        <Element name="category">
        <div className="bg-blue-500 w-screen h-96"></div> 
        </Element>
        Home works!
    </div>
}
export default Home;