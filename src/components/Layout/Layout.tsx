import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="content">
                <main>
                    {/* Conteúdo do seu aplicativo */}
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;