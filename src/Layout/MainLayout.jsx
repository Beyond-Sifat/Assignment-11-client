import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer position='top-right' autoClose={2500}></ToastContainer>
            <Navbar></Navbar>
            <div className='max-w-4/5 mx-auto min-h-[calc(100vh-262px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;