import React from 'react';
import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
         <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        
            <Outlet></Outlet>
          
        </div>
    );
};

export default MainLayout;