import React from 'react'
import ServiceCard from '../Card';


const Services = () => (
  <>
    <section className="py-10 px-6">
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
      </div>
    </section>
  </>
);

export default Services