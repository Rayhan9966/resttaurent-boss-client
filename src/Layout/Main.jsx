import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/footer/Footer';
import NavBar from '../Pages/Shared/navbar/NavBar';

const Main = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderFooter= location.pathname.includes('login')
    return (
        <div>
           { noHeaderFooter||<NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;