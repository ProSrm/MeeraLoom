import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Section - Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Whether you have a question about our
            services, or anything else, our team is ready to answer all your
            questions.
          </p>
          <p className="text-gray-600">
            Feel free to drop us a message and we’ll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
