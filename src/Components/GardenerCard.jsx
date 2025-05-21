import React from 'react';

const GardenerCard = ({ gardener }) => {
    const { name, location, profile_image, specialty, status } = gardener;

    return (

 
        <div className="flex flex-col sm:flex-row  items-center sm:items-start gap-4 border border-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 bg-white w-full max-w-xl mx-auto my-4">
            
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-green-400 flex-shrink-0">
                <img
                    src={profile_image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-600">{location}</p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {status}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full font-medium bg-blue-100 text-blue-700">
                        {specialty}
                    </span>
                </div>
            </div>
        </div>

 

    );
};

export default GardenerCard;
