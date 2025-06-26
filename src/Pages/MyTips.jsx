import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

import { MdEdit, MdDelete } from "react-icons/md";

const MyTips = () => {
    const allTips = useLoaderData();
    const [initialTips, setInitialTips] = useState(allTips);

    const handleDelete = (_id) => {
        console.log("Delete tip with ID:", _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/tips/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tip has been deleted.",
                                icon: "success"
                            });
                            const remainingTips = initialTips.filter(tips => tips._id !== _id);
                            setInitialTips(remainingTips);
                        }
                    });
            }
        });
    };

    return (
        <div>

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
                            {initialTips.map((tip) => (
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
                                        <div className="flex justify-center items-center space-x-4">
                                            <Link
                                                to={`/update/${tip._id}`}
                                                className="p-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200"
                                                title="Update"
                                            >
                                                <MdEdit size={20} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(tip._id)}
                                                className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200"
                                                title="Delete"
                                            >
                                                <MdDelete size={20} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyTips;
