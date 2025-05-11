import './App.css'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify';
import AppRoutes from './App.routes'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '../../stores/authStore';

function App() {
  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token);
    
    if(token){
      try {
        const decoded:any = jwtDecode(token)
        const isValid = decoded.exp*1000 > Date.now();
        if(isValid){
          useAuthStore.getState().login(token);
        }else{
          useAuthStore.getState().logout()
        }
      } catch (error) {
        useAuthStore.getState().logout()
      }
    }
  },[])
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
