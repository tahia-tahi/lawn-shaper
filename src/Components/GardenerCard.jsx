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
    <div className="flex items-center gap-6 border px-4 md:mx-14 border-gray-300 rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 bg-primary text-white mx-auto my-4">
      <div className="w-45 h-45 overflow-hidden border-4 border-white flex-shrink-0">
        <img
          src={profile_image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-grow flex flex-col justify-center space-y-2">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="">{location}</p>

        <div className="flex gap-3 mt-1">
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              status === 'Active'
                ? 'bg-green-200 text-green-900'
                : 'bg-red-200 text-red-900'
            }`}
          >
            {status}
          </span>
          <span className="px-3 py-1 text-sm rounded-full font-medium bg-blue-200 text-blue-900">
            {specialty}
          </span>
        </div>

        <div className="flex gap-10 mt-3 text-sm">
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
