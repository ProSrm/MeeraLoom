
import React from 'react';

const ServiceCard = ({ title, image, description }) => {
  return (
    <section className="py-10 px-6">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="mt-6 grid md:grid-cols-3 gap-3 flex flex-col items-center">
          {/* Icon Container */}
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
            <img
              src={image}
              alt={title}
              className="w-8 h-8"
            />
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;