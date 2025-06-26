import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-lawn.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa6';
import Dashboard from './Dashboard';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const handleLogOut = () => {
    logOut()
      .then(() => toast.warn('You logged out'))
      .catch((error) => console.log('logout', error));
  };




  return (
    <nav className="bg-white shadow-md px-4 md:px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LawnShaper" className="h-10 w-auto rounded-md" />
        </Link>

        <div className="hidden md:flex gap-6 items-center text-secondary font-medium">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/explore" className="hover:text-primary">Explore Gardeners</Link>
          <Link to="/browse" className="hover:text-primary">Browse Tips</Link>


          {user && (
            <>
              <NavLink to={'/dashboard'}>
                Dashboard
              </NavLink>


              {/* <div className="flex flex-col items-center gap-1">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Icon"
                    className="w-8 h-8 rounded-full"
                    title={user.displayName}
                  />

                )}



                <span className="text-sm text-primary">{user.displayName || user.email}</span>
              </div> */}
              <button onClick={handleLogOut} className="btn btn-sm bg-primary text-white hover:bg-secondary">
                Log Out
              </button>
            </>
          )}

          {!user && (
            <>
              <Link to="/auth/login" className="btn btn-sm bg-primary text-white hover:bg-secondary">Log In</Link>
              <Link to="/auth/signup" className="btn btn-sm border border-primary text-primary hover:bg-primary hover:text-white">Sign Up</Link>
            </>
          )}


          <button
            onClick={toggleTheme}
            className="text-xl text-primary hover:text-secondary transition"
            title="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

        </div>

        <div className="md:hidden text-3xl text-primary">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 p-4 bg-base-100 rounded-lg shadow-inner font-medium text-secondary">
          <Link to="/" onClick={toggleMenu} className="hover:text-primary">Home</Link>
          <Link to="/explore" onClick={toggleMenu} className="hover:text-primary">Explore Gardeners</Link>
          <Link to="/browse" onClick={toggleMenu} className="hover:text-primary">Browse Tips</Link>
          <Link to="/sharetip" onClick={toggleMenu} className="hover:text-primary">Share Tip</Link>
          <Link to="/mytips" onClick={toggleMenu} className="hover:text-primary">My Tips</Link>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Icon"
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <span className="text-sm font-medium text-gray-700">{user.displayName || user.email}</span>
              </div>
              <button onClick={() => { handleLogOut(); toggleMenu(); }} className="btn btn-sm w-full bg-primary text-white hover:bg-secondary mt-2">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/auth/login" onClick={toggleMenu} className="btn btn-sm w-full bg-primary text-white hover:bg-secondary">
                Log In
              </Link>
              <Link to="/auth/signup" onClick={toggleMenu} className="btn btn-sm w-full border border-primary text-primary hover:bg-primary hover:text-white">
                Sign Up
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;
