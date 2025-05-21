import React from 'react';

const TrendingTips = ({ tip }) => {
  const { title, image, category } = tip;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full max-w-sm flex flex-col">
      {/* Image with rounded corners */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-5 flex flex-col flex-grow">
        {/* Category Badge */}
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-max">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2">
          {title}
        </h2>

        {/* Read More Button */}
        <a
          href="#"
          className="mt-auto inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition-colors duration-200"
          aria-label={`Read more about ${title}`}
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default TrendingTips;
