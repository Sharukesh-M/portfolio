import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#030014] border-t border-[#2A0E61] py-8 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-white tracking-wider">
                        Sharukesh M
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                        Focusing on Artificial Intelligence & Data Science
                    </p>
                </div>

                <div className="text-gray-400 text-sm flex items-center">
                    &copy; {new Date().getFullYear()} Made with <FaHeart className="text-red-500 mx-1" /> & React
                </div>
            </div>
        </footer>
    );
};

export default Footer;
