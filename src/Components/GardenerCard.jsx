import React from 'react';

const GardenerCard = ({ gardener }) => {
  const {
    name,
    location,
    profile_image,
    specialty,
    status,
    age,
    experiences,
    total_shared_tips,
  } = gardener;

  return (
    <div className="flex items-center gap-6 border border-gray-300 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 bg-white max-w-3xl mx-auto my-4">
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-400 flex-shrink-0">
        <img
          src={profile_image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600">{location}</p>

        <div className="flex gap-3 mt-1">
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {status}
          </span>
          <span className="px-3 py-1 text-sm rounded-full font-medium bg-blue-100 text-blue-800">
            {specialty}
          </span>
        </div>

        <div className="flex gap-10 mt-3 text-gray-700 text-sm">
          <div>
            <p className="font-semibold">Age</p>
            <p>{age} years</p>
          </div>
          <div>
            <p className="font-semibold">Experience</p>
            <p>{experiences}</p>
          </div>
          <div>
            <p className="font-semibold">Shared Tips</p>
            <p>{total_shared_tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
