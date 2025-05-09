import { useRoutes } from "react-router"
import Home from "../Home";
import Signup from "../Signup";

const AppRoutes = ()=>{
    let routes =useRoutes([
        {path:'/', element:<Home/>},
        {path:'/signup', element:<Signup/>},
        {path:'*', element:<p>404 Not Found</p>}
    ])
    return routes;
}
export default AppRoutes;