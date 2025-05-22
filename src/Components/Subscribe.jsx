import React from 'react';
import Lottie from 'lottie-react';
import garden from '../garden.json'

const Subscribe = () => {
    return (
        <div className="bg-green-50 py-16 px-4 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


                <div>
                        <Lottie animationData={garden} />
                </div>


                <div className="text-center md:text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
                            Subscribe To Know The Updates
                        </h2>


                    <p className="text-gray-700">
                        Stay connected with us! Get gardening tips, tricks, and community news straight to your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
                        />
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;
