import React, { use, useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo-lawn.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from '../assets/user.png'

const Navbar = () => {
    const {user} = use(AuthContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogOut = () =>{
    
  }

  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LawnShaper" className="h-10 w-auto rounded-md" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-secondary font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/explore" className="hover:text-primary">Explore Gardeners</Link>
          <Link to="/browse" className="hover:text-primary">Browse Tips</Link>
          <Link to="/sharetip" className="hover:text-primary">Share Tip</Link>
          <Link to="/mytips" className="hover:text-primary">My Tips</Link>
          {
            user ? (<button onClick={handleLogOut} className="btn btn-sm bg-primary text-white hover:bg-secondary">Log Out</button>) :
            (<Link to="/auth/login" className="btn btn-sm bg-primary text-white hover:bg-secondary">Log In</Link>)
          }
          
          <Link to="/auth/signup" className="btn btn-sm border border-primary text-white hover:bg-primary ">Sign Up</Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden text-3xl text-primary">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 p-4 bg-base-100 rounded-lg shadow-inner font-medium text-secondary">
          <Link to="/" onClick={toggleMenu} className="hover:text-primary">Home</Link>
          <Link to="/explore" onClick={toggleMenu} className="hover:text-primary">Explore Gardeners</Link>
          <Link to="/browse" onClick={toggleMenu} className="hover:text-primary">Browse Tips</Link>
          <Link to="/sharetip" onClick={toggleMenu} className="hover:text-primary">Share Tip</Link>
          <Link to="/mytips" onClick={toggleMenu} className="hover:text-primary">My Tips</Link>
          <Link to="/auth/login" onClick={toggleMenu} className="btn btn-sm w-full bg-primary text-white hover:bg-secondary">Log In</Link>
          <Link to="/auth/signup" onClick={toggleMenu} className="btn btn-sm w-full border border-primary text-white hover:bg-primary">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
