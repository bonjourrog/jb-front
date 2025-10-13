import { useRoutes } from "react-router"
import Home from "../Home";
import Signup from "../Signup";
import Signin from "../Signin";
import Results from "../Results";
import Dashboard from "../Dashboard";
import UnauthorizedPage from "../Unauthorized";
import { ProtectedRoute } from "./ProtectedRoutes";
import Welcome from "../Dashboard/Components/Welcome";
import JobList from "../Dashboard/Components/JobList";
import Applied from "../Applied";
import UserLayout from "../../layout/dashboard/user";
import Curriculum from "../Curriculum";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Results /> },
        { path: '/landing', element: <Home /> },
        { path: '/signup', element: <Signup /> },
        { path: '/login', element: <Signin /> },
        { path: '/dashboard', 
            element: <ProtectedRoute allowedRoles={['company']}><Dashboard /></ProtectedRoute>,
            children:[
                {index: true, element:<Welcome/>},
                {path:'job-list', element:<JobList/>},
            ]
        },
        {path: '/user',
            element: <ProtectedRoute allowedRoles={['user']}><UserLayout /></ProtectedRoute>,
            children:[
                {index: true, element:<p>Bienvenido</p>},
                {path:'applied', element:<Applied/>},
                {path:'curriculum', element:<Curriculum/>},
            ]
        },
        { path: '/unauthorized', element: <UnauthorizedPage /> },
        { path: '*', element: <p>404 Not Found</p> }
    ])
    return routes;
}
export default AppRoutes;