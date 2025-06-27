import { Link, useLoaderData } from 'react-router';
import { IoIosEye } from "react-icons/io";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion'; // ✅ import animation

const BrowseTips = () => {
  const tips = useLoaderData();
  const publicTips = tips.filter(tip => tip.availability?.toLowerCase() === 'public');

  return (
    <div>
      <Navbar />

      <div className="px-4 md:px-16 py-10 mt-20">
        <h1 className="text-3xl font-bold mb-10 text-center text-primary">
          Browse All Gardening Tips
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border rounded-xl overflow-hidden bg-white shadow-lg">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Image</th>
                <th className="py-4 px-6 text-left font-semibold">Title</th>
                <th className="py-4 px-6 text-left font-semibold">Category</th>
                <th className="py-4 px-6 text-center font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {publicTips.map((tip, index) => (
                <motion.tr
                  key={tip._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="hover:bg-green-50 transition duration-200"
                >
                  <td className="py-3 px-6">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-20 h-16 object-cover rounded-lg border border-gray-200"
                    />
                  </td>
                  <td className="py-3 px-6 text-gray-800 font-medium">{tip.title}</td>
                  <td className="py-3 px-6 text-gray-600">{tip.category}</td>
                  <td className="py-3 px-6 text-center">
                    <Link
                      to={`/detail/${tip._id}`}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200 transition"
                    >
                      <IoIosEye size={18} />
                      View
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseTips;
