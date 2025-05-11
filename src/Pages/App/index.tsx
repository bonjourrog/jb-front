import './App.css'
import { BrowserRouter } from 'react-router'
import { ToastContainer } from 'react-toastify';
import AppRoutes from './App.routes'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
