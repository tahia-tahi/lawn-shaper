import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { MdEdit, MdDelete } from "react-icons/md";

const MyTips = () => {
    const allTips = useLoaderData();
    const [initialTips, setInitialTips] = useState(allTips);

    const handleDelete = (_id) => {
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
                fetch(`https://lawn-shaper-server.vercel.app/tips/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your tip has been deleted.", "success");
                            const remainingTips = initialTips.filter(tips => tips._id !== _id);
                            setInitialTips(remainingTips);
                        }
                    });
            }
        });
    };

    return (
        <div className=" py-10">
            <h1 className="text-3xl font-bold text-primary  pb-2 inline-block">
                My Submitted Tips
            </h1>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm bg-white rounded-xl shadow-md overflow-hidden">
                    <thead className="bg-primary text-base-100 text-left">
                        <tr>
                            <th className="py-4 px-6 font-semibold">Title</th>
                            <th className="py-4 px-6 font-semibold">Image</th>
                            <th className="py-4 px-6 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {initialTips.map((tip) => (
                            <tr
                                key={tip._id}
                                className="hover:bg-green-50 transition-all duration-200"
                            >
                                <td className="py-4 px-6 font-medium text-gray-800">{tip.title}</td>
                                <td className="py-4 px-6">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-24 h-16 object-cover rounded-lg border border-gray-200"
                                    />
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <Link
                                            to={`/update/${tip._id}`}
                                            className="p-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition"
                                            title="Update"
                                        >
                                            <MdEdit size={20} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(tip._id)}
                                            className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200 transition"
                                            title="Delete"
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {initialTips.length === 0 && (
                            <tr>
                                <td colSpan="3" className="py-10 text-center text-gray-500">
                                    No tips submitted yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTips;
