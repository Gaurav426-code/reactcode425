import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Mobile Repair",
      description: "We provide expert repair services for all mobile devices.",
    },
    {
      title: "Software Update",
      description: "Keep your device up-to-date with our software services.",
    },
    {
      title: "Battery Replacement",
      description: "Fast and reliable battery replacement for all models.",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
