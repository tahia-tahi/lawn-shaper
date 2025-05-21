import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const GardenersSlide = ({ gardeners }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <Slide
                autoplay
                pauseOnHover
                duration={3500}
                transitionDuration={800}
                infinite
                indicators
                arrows={false}
            >
                {gardeners.map(g => (
                    <div key={g._id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={g.profile_image}
                            alt={g.name}
                            className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mb-4 shadow-lg"
                        />
                        <h2 className="text-xl font-semibold text-green-800">{g.name}</h2>
                        <p className="text-sm text-gray-600">{g.specialty}</p>
                        <p className="text-xs text-gray-500 mb-3">{g.location}</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                                View Profile
                            </button>
                            <button className="px-3 py-1 text-sm bg-emerald-500 text-white rounded hover:bg-emerald-600">
                                Hire Now
                            </button>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default GardenersSlide;
