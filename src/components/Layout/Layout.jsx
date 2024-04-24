import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout({ logo }) {
    return (
        <div>
            <Header logo={logo} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;