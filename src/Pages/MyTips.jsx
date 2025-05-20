import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const MyTips = () => {
    const allTips = useLoaderData();

    return (
        <div className="px-4 md:px-24 py-10">
            <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">🌿 My Submitted Tips</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-green-100">
                        <tr>
                            <th className="text-left py-3 px-6 font-semibold text-green-700">Title</th>
                            <th className="text-left py-3 px-6 font-semibold text-green-700">Image</th>
                            <th className="text-center py-3 px-6 font-semibold text-green-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTips.map((tip) => (
                            <tr key={tip._id} className="border-t">
                                <td className="py-4 px-6">{tip.title}</td>
                                <td className="py-4 px-6">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-20 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="py-4 px-6 text-center space-x-3">
                                    <Link
                                        to={`/update/${tip._id}`}
                                        className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(tip._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Placeholder delete handler
const handleDelete = (id) => {
    console.log("Delete tip with ID:", id);
    // Implement actual delete logic here (confirmation, fetch call, state update)
};

export default MyTips;
