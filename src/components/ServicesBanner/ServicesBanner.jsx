import React from 'react';
import underimg from "/asset/Rectangle 344.png"
const ServicesBanner = () => {
  return (
    <>
    <div className="hero h-[300px] md:h-[500px] mt-3" 
    
    style={{ backgroundImage: "url('/asset/image 15.png')" 
    
    }}>
      <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-blue-500  to-transparent  "></div>

    <div className=" flex items-center justify-start text-neutral-content  mr-auto ml-4 md:ml-28  ">
        <div className="max-w-md">
          <h1 className=" text-5xl text-white font-bold mb-5">Services</h1>
          <p className=" text-white">We partner with you to fulfil your requirements for on-demand talent and a flexible workforce</p>        
        </div>
      </div>
    
    </div>
    <img src={underimg} alt="" />
  </>
  );
};

export default ServicesBanner;