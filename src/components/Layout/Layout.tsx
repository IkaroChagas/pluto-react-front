import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';

const Layout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default Layout;