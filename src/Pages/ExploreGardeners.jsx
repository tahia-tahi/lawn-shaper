import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import GardenerCard from '../Components/GardenerCard';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ Animation import

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

      <div className="mb-30 mt-20 px-4">
        <h1 className="text-3xl text-primary font-bold text-center mb-6">Explore Gardeners</h1>

        {/* Filter Buttons with animation */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
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
        </motion.div>

        {/* Gardener Cards with fade/scale animation */}
        <motion.div
          className="grid grid-cols-1 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredGardeners.length > 0 ? (
              filteredGardeners.map(gardener => (
                <motion.div
                  key={gardener._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <GardenerCard gardener={gardener} />
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No gardeners found.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ExploreGardeners;
