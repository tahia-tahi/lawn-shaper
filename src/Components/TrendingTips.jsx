import React from 'react';

const TrendingTips = ({ tip }) => {
    const { title, image,category } = tip;

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-full h-[340px] flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
                <h2 className="text-[15px] font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h2>
                 <p className='text-[12px]'>{category}</p>
                <a
                    href="#"
                    className="text-sm font-bold text-primary hover:text-secondary mt-auto"
                >
                    Read more →
                </a>
               
            </div>
        </div>
    );
};

export default TrendingTips;
