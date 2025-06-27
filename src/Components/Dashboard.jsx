import  { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaChartPie, FaShareSquare, FaStickyNote } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (

    <div>

        <Navbar></Navbar>

    <div className="min-h-screen flex bg-gray-50">

      {/* Left Sidebar */}
      <aside className="w-64 bg-primary shadow-lg p-4">
        <div className="flex items-center gap-3 mb-6 bg-base-100 p-4 rounded-3xl">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User Icon"
              className="w-10 h-10 rounded-full"
              title={user.displayName}
            />
          )}
          <div >
            <p className="font-semibold text-gray-800 text-sm">{user?.displayName || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>

       <nav className="space-y-3 text-xl text-gray-900">
  <Link
    to="/dashboard/overview"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
  >
    <FaChartPie className="text-gray-900" />
    Overview
  </Link>

  <Link
    to="/dashboard/sharetip"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
  >
    <FaShareSquare className="text-gray-900" />
    Share Tip
  </Link>

  <Link
    to="/dashboard/mytips"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100"
  >
    <FaStickyNote className="text-gray-900" />
    My Tips
  </Link>
</nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
      <h1 className="text-2xl text-base-100 font-bold mb-4 p-4 bg-primary rounded">Welcome to the dashboard</h1>

     

      <Outlet />
    </main>
    </div>
<Footer></Footer>
    </div>

  );
};

export default Dashboard;
