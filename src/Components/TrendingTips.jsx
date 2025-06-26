import React from 'react';

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

        <a
          href="#"
          className="text-[12px] mt-auto inline-block text-base-100 font-semibold hover:text-green-950 transition-colors duration-200"
          aria-label={`Read more about ${title}`}
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default TrendingTips;
