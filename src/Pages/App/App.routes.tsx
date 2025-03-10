import { useRoutes } from "react-router"
import Home from "../Home";

const AppRoutes = ()=>{
    let routes =useRoutes([
        {path:'/', element:<Home/>},
        {path:'*', element:<p>404 Not Found</p>}
    ])
    return routes;
}
export default AppRoutes;