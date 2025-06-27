import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    e.target.reset();
  };

  return (
    <div>
      <Navbar />

      <div className=" mx-auto px-4 md:px-16 py-12">
        <h1 className="text-3xl font-bold text-primary mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question, suggestion, or just want to say hi? Fill out the form below and we’ll get back to you soon!
        </p>

        <form onSubmit={handleSubmit} className="bg-base-100 p-8 rounded-xl shadow-md space-y-6 border border-green-100">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
