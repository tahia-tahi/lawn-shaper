import React from 'react';
import { Link } from 'react-router';

const TrendingTips = ({ tip }) => {
  const { title, image, category } = tip;

  return (
    <div className="bg-primary rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full h-30 object-cover rounded-t-xl"
      />

      <div className="p-5 flex flex-col flex-grow relative">
        <span className="absolute -top-3 inline-block bg-green-50 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-max">
          {category}
        </span>


        <h2 className="text-[12px] font-semibold text-white mb-1 line-clamp-2">
          {title}
        </h2>

        <Link
          to={`/detail/${tip._id}`}
          className="  text-gray-200 hover:text-green-900 transition"
        >
         
          Read More
        </Link>
      </div>
    </div>
  );
};

export default TrendingTips;
