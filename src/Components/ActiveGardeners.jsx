import React, { useEffect, useState } from 'react';
import GardenersSlide from './GardenersSlide';
import { Fade } from 'react-awesome-reveal';

const ActiveGardeners = () => {
    const [gardeners, setGardeners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/gardeners')
            .then(res => res.json())
            .then(data => {
                const activeGardeners = data.filter(g => g.status === 'Active');
                setGardeners(activeGardeners);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="px-4 md:px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                <div className="text-center md:text-left">
                    <Fade direction='down'>
                        <h1 className="text-4xl font-bold text-green-700 mb-4">
                            Meet Our Active Gardeners
                        </h1>
                    </Fade>

                    <Fade direction='up'>
                        <p className="text-gray-600 text-lg">
                            These expert gardeners are passionate about making your green dreams come true.
                            Whether it’s hydroponics or balcony gardening—they’ve got you covered.
                        </p>
                    </Fade>
                </div>
                <Fade direction='right'>

                    <div className="w-full">
                        {gardeners.length > 0 ? (
                            <GardenersSlide gardeners={gardeners} />
                        ) : (
                            <p className="text-center text-gray-500">Loading slideshow...</p>
                        )}
                    </div>
                </Fade>


            </div>
        </div>
    );
};

export default ActiveGardeners;
