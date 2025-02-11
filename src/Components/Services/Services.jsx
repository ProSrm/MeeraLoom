import React from 'react'
import ServiceCard from '../Card';


const Services = () => (
  <>
    <section className="py-10 px-6">
      <h2 className="text-3xl font-semibold text-center">Our Services</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-3">
        <ServiceCard
          title="Web Applications"
          image=""
          description="Building high-performance web applications."
        />
        <ServiceCard
          title="Cybersecurity"
          image=""
          description="Protecting your digital assets with advanced security measures."
        />
        <ServiceCard
          title="Cloud Solutions"
          image=""
          description="Optimized cloud services for better scalability."
        />

        <ServiceCard
          title="Software Development"
          image=""
          description="Tailored applications for businesses."
        />
        <ServiceCard
          title="Machine Learning"
          image=""
          description="AI-powered solutions for automation."
        />
        <ServiceCard
          title="System Integration"
          image=""
          description="Seamless integration to platforms."
        />
      </div>
    </section>
  </>
);

export default Services