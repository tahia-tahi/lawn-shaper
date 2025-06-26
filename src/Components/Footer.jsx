import React from 'react';
import logo from '../assets/logo-lawn.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 px-6 md:px-16 py-10 text-base-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 flex-wrap">

                {/* 1. Logo & Tagline */}
                <div className="flex flex-col items-start gap-4 max-w-xs">
                    <img src={logo} alt="Logo" className="w-28 rounded-md" />
                    <p className="text-sm">
                        Your trusted community for gardening wisdom.
                    </p>
                </div>

                {/* 2. Contact Info */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">Contact</h3>
                    <p>Email: <a href="mailto:info@lawnshaper.com" className="hover:text-primary">info@lawnshaper.com</a></p>
                    <p>Phone: <a href="tel:+8801234567890" className="hover:text-primary">+880 123 456 7890</a></p>
                    <Link to="/terms" className="text-sm hover:underline hover:text-primary mt-1">Terms & Conditions</Link>
                </div>

                {/* 3. Quick Links */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-lg">Quick Links</h3>
                    <Link to="/" className="text-sm hover:underline hover:text-primary">Home</Link>
                    <Link to="/explore" className="text-sm hover:underline hover:text-primary">Explore Gardeners</Link>
                    <Link to="/browse" className="text-sm hover:underline hover:text-primary">Tips</Link>
                    <Link to="/contact" className="text-sm hover:underline hover:text-primary">Contact</Link>
                </div>

                {/* 4. Social Media */}
                <div className="flex flex-col gap-3 items-start">
                    <h3 className="font-semibold text-lg">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-primary transition duration-300">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center text-sm mt-10 border-t border-base-100 pt-6">
                © {new Date().getFullYear()} LawnShaper. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
