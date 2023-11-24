import React from 'react';
import ServicesBanner from '../ServicesBanner/ServicesBanner';
import Servicescard from '../servicescard/Servicescard';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
  const servicescards =useLoaderData()
  // console.log(cards)
  return (
    <div>
      
     <ServicesBanner></ServicesBanner>
   
     <div className="max-w-7xl mx-auto">
     <Servicescard servicescards={servicescards} ></Servicescard>
     </div>
    </div>
  
  );
};

export default Services;