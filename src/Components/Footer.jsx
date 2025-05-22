import React from 'react';
import logo from '../assets/logo-lawn.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 px-6 md:px-16 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className=" rounded-md" />
                    </div>
                    <p className="text-sm text-base-100">
                        Your trusted community for gardening wisdom.
                    </p>
                </div>

                <div className="flex flex-col gap-2 text-base-100">
                    <h3 className="font-semibold text-base-100 text-lg">Contact</h3>
                    <p>Email: <a href="mailto:info@lawnshaper.com" className="hover:text-primary">info@lawnshaper.com</a></p>
                    <p>Phone: <a href="tel:+8801234567890" className="hover:text-primary">+880 123 456 7890</a></p>
                    <Link to="/terms" className="text-sm hover:underline hover:text-primary mt-1">Terms & Conditions</Link>
                </div>

                <div className="flex flex-col gap-3 items-start text-base-100">
                    <h3 className="font-semibold text-base-100 text-lg">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition duration-300">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-base-100 mt-10 border-t border-base-100 pt-6">
                © {new Date().getFullYear()} LawnShaper. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
