import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const GardenersSlide = ({ gardeners }) => {
    return (
        <div className="w-full mx-auto">
            <Slide
                autoplay
                pauseOnHover
                duration={2800}
                transitionDuration={800}
                infinite

                arrows={false}
            >
                {gardeners.map(g => (
                    <div key={g._id} className="flex justify-center py-4">
                        <div className="w-80 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition">
                            <img
                                src={g.profile_image}
                                alt={g.name}
                                className="w-28 h-28 rounded-full object-cover border-4 border-green-500 mx-auto mb-4 shadow"
                            />
                            <h2 className="text-xl font-semibold text-green-800 text-center">{g.name}</h2>
                            <p className="text-sm text-gray-600 text-center">{g.specialty}</p>
                            <p className="text-xs text-gray-500 text-center mb-4">{g.location}</p>
                            <div className="flex justify-center gap-3">
                                <button className="px-4 py-1 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition">
                                    View Profile
                                </button>
                                <button className="px-4 py-1 text-sm bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition">
                                    Hire Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default GardenersSlide;
