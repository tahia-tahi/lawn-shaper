import React from 'react';
import { useLoaderData } from 'react-router';
import { AiOutlineLike } from "react-icons/ai";

const TipsDetail = () => {
    const detail = useLoaderData();
    console.log(detail);

    return (
        <div className="px-4 md:px-24 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-green-700">🌿 Tip Details</h1>

            <div
                key={detail._id}
                className="bg-green-50 rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
                <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-green-800">{detail.title}</h2>
                    <p className="text-gray-700"><span className="font-semibold">Topic:</span> {detail.topic}</p>
                    <p className="text-gray-700"><span className="font-semibold">Category:</span> {detail.category}</p>
                    <p className="text-gray-700"><span className="font-semibold">Difficulty:</span> {detail.difficulty}</p>
                    <p className="text-gray-700"><span className="font-semibold">Description:</span> {detail.description}</p>

                    <div className="pt-4">
                        <button className="flex items-center gap-2 text-primary hover:text-red-700 transition">
                            <AiOutlineLike /> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsDetail;
