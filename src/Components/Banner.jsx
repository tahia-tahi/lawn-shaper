import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Banner = () => {
    const sliders = [
        {
            image: "https://i.ibb.co/8nH77HjN/1.png",
            title: "Grow Together",
            description: "Join hands to build a greener world.\nEvery plant, every person makes a difference."
        },
        {
            image: "https://i.ibb.co/yFSk27Qp/2.png",
            title: "Urban Gardening Made Simple",
            description: "No yard? No problem. Grow fresh in small spaces.\nDiscover how easy gardening can be, anywhere."
        },
        {
            image: "https://i.ibb.co/XGFXNh4/3.png",
            title: "Your Green Journey Starts Here",
            description: "Take the first step toward sustainable living.\nLet’s bring life to your windows, balconies, and hearts."
        }
    ];

    return (
        <div className=' w-full'>
            <Zoom scale={1.4} indicators={true} arrows={false}>
                {sliders.map((slider, index) => (
                    <div key={index} className="relative w-full h-[500px]">
                        <img
                            src={slider.image}
                            alt="Slide"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center p-4">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{slider.title}</h2>
                            <p className="text-lg md:text-xl whitespace-pre-line mb-6">{slider.description}</p>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Explore Tips</button>
                        </div>
           
                    </div>
                ))}
            </Zoom>
        </div>
    );
};

export default Banner;
