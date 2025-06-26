import React, { useEffect, useState } from 'react';
import GardenersSlide from './GardenersSlide';
import { Fade } from 'react-awesome-reveal';

const ActiveGardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch('https://lawn-shaper-server.vercel.app/gardeners')
            .then(res => res.json())
            .then(data => {
                const activeGardeners = data.filter(g => g.status === 'Active');
                setGardeners(activeGardeners);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="px-4 md:px-16 py-15 bg-primary mx-auto">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">

                {/* Text Column */}
                <div className="text-center md:text-left">
                    <Fade direction="down" triggerOnce>
                        <h1 className="text-3xl md:text-4xl font-bold text-base-100 mb-4">
                            Meet Our Gardeners
                        </h1>
                    </Fade>

                    <Fade direction="up" duration={600} triggerOnce>
                        <p className="text-gray-800 text-lg leading-relaxed">
                            These expert gardeners are passionate about making your green dreams come true. Whether it’s hydroponics, balcony gardening, or organic soil management — they’ve got you covered.

                            From guiding first-time plant parents to supporting seasoned growers, they bring a wealth of knowledge, creativity, and love for all things green.
                        </p>
                    </Fade>
                </div>

                {/* Slide Column */}
                <Fade direction="right" duration={600} triggerOnce>

                    {gardeners.length > 0 ? (
                        <GardenersSlide gardeners={gardeners} />
                    ) : (
                        <p className="text-center text-gray-400">Loading slideshow...</p>
                    )}

                </Fade>

            </div>
        </div>
    );
};

export default ActiveGardeners;
