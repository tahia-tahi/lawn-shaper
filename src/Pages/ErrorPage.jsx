import React from 'react';
import { Link } from 'react-router';
import error from '../assets/error.png';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <img src={error} alt="Error" className="max-w-xs sm:max-w-md mb-6" />
      <Link
        to="/"
        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-secondary transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
