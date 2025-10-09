import './Dashboard.css';
import Sidebar from './Components/Sidebar';
import { Outlet } from 'react-router';
import { Close, Menu as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const Dashboard = () => {
    const [menuState, setMenuState] = useState<{ anchorEl: null | HTMLElement, isOpen: boolean }>({
        anchorEl: null,
        isOpen: false,
    });
    return <main className="dashboard">
        <input type="checkbox" id="sidebar-toggle" className="peer hidden" />
        <div className='dashboard__sidebar--div'>
            <label
                htmlFor="sidebar-toggle"
                className="lg:hidden fixed right-4 top-4 cursor-pointer z-50"
            >
                <Close sx={{ fontSize: 40 }} />
            </label>
            <Sidebar />
        </div>
        <section className='dashboard__content'>
            <header>
                <ul className='w-full flex gap-6 items-center'>
                    <li>
                        <label
                            htmlFor="sidebar-toggle"
                            className="lg:hidden cursor-pointer"
                        >
                            <MenuIcon sx={{ fontSize: 40 }} />
                        </label>
                    </li>
                    <li>
                        <strong className='text-[#1d1c22] font-bold'>Welcome</strong>
                    </li>
                    <li className='w-full flex justify-end pr-2'>
                        <p className='w-12 h-12 rounded-full bg-gray-200' onClick={(event) => {
                            setMenuState({
                                anchorEl: event.currentTarget,
                                isOpen: true,
                            });
                        }}>
                        </p>
                    </li>
                </ul>
            </header>
            <Outlet />
        </section>
        <Menu
            id="basic-menu"
            anchorEl={menuState.anchorEl}
            open={menuState.isOpen}
            onClose={() => setMenuState({ anchorEl: null, isOpen: false })}
            keepMounted={false}
            sx={{
                '& .MuiPaper-root': {
                    boxShadow: '0 .2em 1em rgba(0,0,0,0.1)'
                }
            }}
        >
            <MenuItem onClick={() => {
                setMenuState({ anchorEl: null, isOpen: false });
            }} sx={{ mb: 2, background: 'transparent' }}>
                <div className='flex items-center gap-2 text-sm bg-red-200 text-red-500 p-4 rounded-md'>Cerrar Sesión</div>
            </MenuItem>
        </Menu>
    </main>
}
export default Dashboard;