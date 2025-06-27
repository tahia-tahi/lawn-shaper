import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { AiOutlineLike } from "react-icons/ai";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const TipsDetail = () => {
  const detail = useLoaderData();
  const [likes, setLikes] = useState(detail.totalLiked || 0);
  const [liked, setLiked] = useState(false); 

  const handleLike = () => {
    if (liked) return; 

    fetch(`https://lawn-shaper-server.vercel.app/tips/${detail._id}/like`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setLikes(likes + 1);
          setLiked(true);
        }
      });
  };

  return (
    <div>
      <Navbar />

      <div className="px-4 md:px-24 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-700">🌿 Tip Details</h1>

        <div className="bg-green-50 rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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

            <div className="pt-4 flex items-center gap-2">
              <button
                onClick={handleLike}
                disabled={liked}
                className="flex items-center gap-2 text-primary hover:text-red-700 transition"
              >
                <AiOutlineLike className="text-xl" />
                <span>{likes}</span>
              </button>
              {liked && <span className="text-sm text-green-600">Thanks for liking!</span>}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TipsDetail;
