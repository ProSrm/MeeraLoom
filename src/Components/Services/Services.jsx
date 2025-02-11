import React from 'react'
import ServiceCard from '../Card';
import webapplication from "../../assets/webapplication.svg"
import cloudSolution from "../../assets/cloud solutions.svg"
import cybersecurity from "../../assets/CyberSecurity.svg"
import machineLearning from "../../assets/machine learning.svg"
import softwareDevelopment from "../../assets/Software devlopment.svg"
import systemIntergration from "../../assets/SystemIntegration.svg"




const Services = () => (
  <>
    <section className="py-10 px-6">
      <h2 className="text-3xl font-semibold text-center">Our Services</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-3">
        <ServiceCard
          title="Web Applications"
          image={webapplication}
          description="Building high-performance web applications."
        />
        <ServiceCard
          title="Cybersecurity"
          image={cybersecurity}
          description="Protecting your digital assets with advanced security measures."
        />
        <ServiceCard
          title="Cloud Solutions"
          image={cloudSolution}
          description="Optimized cloud services for better scalability."
        />

        <ServiceCard
          title="Software Development"
          image={softwareDevelopment}
          description="Tailored applications for businesses."
        />
        <ServiceCard
          title="Machine Learning"
          image={machineLearning}
          description="AI-powered solutions for automation."
        />
        <ServiceCard
          title="System Integration"
          image={systemIntergration}
          description="Seamless integration to platforms."
        />
      </div>
    </section>
  </>
);

export default Services