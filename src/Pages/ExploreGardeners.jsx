import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import GardenerCard from '../Components/GardenerCard';

const ExploreGardeners = () => {
  const gardeners = useLoaderData();
  const [filter, setFilter] = useState('All');
  const [filteredGardeners, setFilteredGardeners] = useState(gardeners);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredGardeners(gardeners);
    } else {
      setFilteredGardeners(gardeners.filter(g => g.status === filter));
    }
  }, [filter, gardeners]);

  return (
    <div>
      <Navbar />

      <div className="mb-30 mt-20 px-4 md:px-10">
        <h1 className="text-3xl text-primary font-bold text-center mb-6">Explore Gardeners</h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {['All', 'Active', 'Inactive'].map(option => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full font-medium border transition duration-200 ${
                filter === option
                  ? 'bg-primary text-white'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Gardener Cards */}
        <div className="grid grid-cols-1 gap-6">
          {filteredGardeners.length > 0 ? (
            filteredGardeners.map(gardener => (
              <GardenerCard key={gardener._id} gardener={gardener} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No gardeners found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExploreGardeners;
