import  { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (

    <div>

        <Navbar></Navbar>

    <div className="min-h-screen flex bg-gray-50">

      {/* Left Sidebar */}
      <aside className="w-64 bg-primary shadow-lg p-4">
        <div className="flex items-center gap-3 mb-6">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="User Icon"
              className="w-10 h-10 rounded-full"
              title={user.displayName}
            />
          )}
          <div>
            <p className="font-semibold text-gray-800 text-sm">{user?.displayName || 'User'}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          <Link
            to="/dashboard/sharetip"
            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            📤 Share Tip
          </Link>
          <Link
            to="/dashboard/mytips"
            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            📝 My Tips
          </Link>
          <Link
            to="/account"
            className="block px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
             My Account
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>
        <Outlet />
      </main>
    </div>
<Footer></Footer>
    </div>

  );
};

export default Dashboard;
