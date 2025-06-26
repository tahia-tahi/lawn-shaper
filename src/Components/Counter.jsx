import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const countData = [
    { count: '850', label: 'Gardens Beautified' },
    { count: '1240', label: 'Happy Clients' },
    { count: '540', label: 'Tips Shared' },
  ];

  return (
    <div className="px:4 md:px-16 mx-auto my-30">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gradient-to-r from-green-900 via-green-800 to-green-900 rounded-2xl p-10 shadow-xl">
        {countData.map((item, index) => (
          <div key={index} className="text-center text-white space-y-4 hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl md:text-5xl font-extrabold text-lime-300 drop-shadow">
              <CountUp end={parseInt(item.count)} duration={3} />+
            </h1>
            <div className="h-[3px] w-[50px] mx-auto bg-lime-300 rounded-full"></div>
            <p className="text-base md:text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
