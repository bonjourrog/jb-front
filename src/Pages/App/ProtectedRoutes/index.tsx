import { JSX } from "react";
import { useAuthStore } from "../../../stores/authStore"
import { Navigate } from "react-router";

interface Props{
    children: JSX.Element;
    allowedRoles: Array<'user'|'company'>;
}

export const ProtectedRoute: React.FC<Props> = ({children, allowedRoles})=>{
    const {isAuthenticated, role, isAuthReady} = useAuthStore();
    console.log(isAuthenticated);
    if (!isAuthReady) return null;
    if(!isAuthenticated) return <Navigate to='/login'/>;
    if(allowedRoles && !allowedRoles.includes(role!)) return <Navigate to='/unauthorized'/>;
    return children;

}