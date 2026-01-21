import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from '../ui/StarBackground';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative text-white">
            <StarBackground />
            <Navbar />
            <main className="flex-grow z-10 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
