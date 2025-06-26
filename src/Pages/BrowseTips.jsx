import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoIosEye } from "react-icons/io";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BrowseTips = () => {
    const tips = useLoaderData();
    console.log(tips);

  

    const publicTips = tips.filter(tip => tip.availability?.toLowerCase() === 'public');

    return (

        <div>

            <Navbar></Navbar>

        <div className="px-4 md:px-16 py-10 mt-20">
            <h1 className="text-3xl font-bold mb-6 text-center text-primary">Browse All Gardening Tips</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
                    <thead className="bg-green-100 text-left">
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-700">Image</th>
                            <th className="py-3 px-4 font-semibold text-gray-700">Title</th>
                            <th className="py-3 px-4 font-semibold text-gray-700">Category</th>
                            <th className="py-3 px-4 font-semibold text-gray-700 text-center">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicTips.map((tip) => (
                            <tr key={tip._id} className="border-t hover:bg-green-50 transition">
                                <td className="py-3 px-4">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-20 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 px-4 text-gray-800">{tip.title}</td>
                                <td className="py-3 px-4 text-gray-600">{tip.category}</td>
                                <td className="py-3 px-4 text-center">
                                    <Link to={`/detail/${tip._id}`} className="text-green-600 hover:text-green-800 transition">
                                        <IoIosEye  size={20} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        <Footer></Footer>
        </div>

    );
};

export default BrowseTips;
