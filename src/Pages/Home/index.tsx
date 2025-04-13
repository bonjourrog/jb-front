import { Element } from "react-scroll";
import Header from "./Components/Header";
import { HomeProps } from "./Home.props";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Signup from "./Components/Signup";
import Post from "./Components/Post";

const Home:React.FC<HomeProps> = ()=>{
    return <div>
        <Element name="home">
            <Header/>
            <Hero/>
        </Element>
        <br />
        <Categories/>
        <Signup/>
        <Post/>
    </div>
}
export default Home;