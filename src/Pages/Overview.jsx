import React, { useContext, useEffect, useState } from 'react';
import { FaBoxOpen, FaListAlt, FaUser } from 'react-icons/fa';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { AuthContext } from '../Provider/AuthProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = () => {
  const { user } = useContext(AuthContext);

  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

  useEffect(() => {
    fetch('https://lawn-shaper-server.vercel.app/tips')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTotalItems(data.length);
        } else if (Array.isArray(data.data)) {
          setTotalItems(data.data.length);
        }
      });

    fetch(`https://lawn-shaper-server.vercel.app/tips/my/all`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMyItems(data.length);
        } else if (Array.isArray(data.data)) {
          setMyItems(data.data.length);
        }
      });
  }, [user]);

  const chartData = {
    labels: ['My Tips', 'Others'],
    datasets: [
      {
        label: 'Tip Distribution',
        data: [myItems, totalItems - myItems],
        backgroundColor: ['#34D399', '#60A5FA'],
        borderColor: ['#10B981', '#3B82F6'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="px-4  py-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 border border-green-100">
          <FaBoxOpen className="text-4xl text-blue-500" />
          <div>
            <p className="text-gray-500">Total Tips</p>
            <h2 className="text-2xl font-bold">{myItems}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 border border-green-100">
          <FaListAlt className="text-4xl text-green-500" />
          <div>
            <p className="text-gray-500">My Tips</p>
            <h2 className="text-2xl font-bold">{totalItems}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 border border-green-100">
          <FaUser className="text-4xl text-purple-500" />
          <div>
            <p className="text-gray-500">Logged-in User</p>
            <h2 className="text-lg font-semibold">{user?.displayName || 'N/A'}</h2>
            <p className="text-sm text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow border border-green-100 max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">Tips Contribution Chart</h3>
        <Doughnut data={chartData} />
      </div>
    </div>
  );
};

export default Overview;
