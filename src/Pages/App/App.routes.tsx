import { useRoutes } from "react-router"
import Home from "../Home";
import Signup from "../Signup";
import Signin from "../Signin";
import Results from "../Results";
import UnauthorizedPage from "../Unauthorized";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Results /> },
        { path: '/landing', element: <Home /> },
        { path: '/signup', element: <Signup /> },
        { path: '/login', element: <Signin /> },
        { path: '/unauthorizedPage', element: <UnauthorizedPage /> },
        { path: '*', element: <p>404 Not Found</p> }
    ])
    return routes;
}
export default AppRoutes;