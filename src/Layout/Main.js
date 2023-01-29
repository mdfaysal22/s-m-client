import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer/Footer';
import Navbar from '../Components/Share/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-screen-md min-h-[64vh] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;