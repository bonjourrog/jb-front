import { create } from 'zustand';
import {jwtDecode as jwt_decode} from 'jwt-decode';

interface AuthState{
    token: string | null;
    role: 'company' | 'user' | null;
    isAuthenticated: boolean;
    login:(token: string)=>void;
    logout:()=>void;
}
export const useAuthStore = create<AuthState>(set=>({
    token:null,
    role:null,
    isAuthenticated:false,
    login:(token:string)=>{
        const decoded:any = jwt_decode(token)
        set({
            token,
            role:decoded.role,
            isAuthenticated:true
        });
        localStorage.setItem("token", token)
    },
    logout:()=>{
        set({token:null, role:null, isAuthenticated:false});
        localStorage.removeItem("token");
    }
}));
