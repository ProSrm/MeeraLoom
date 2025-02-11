export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-sans font-bold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-600">Subject</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Subject"
            />
          </div>
          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
