import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { LayoutContainer } from './styled';

const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Navbar />
            <Header />
            <Main />
            <Footer />
        </LayoutContainer>
    );
}

export default Layout;