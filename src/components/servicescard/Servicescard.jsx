import React from 'react';
import AservicesCard from '../Layouts/AservicesCard/AservicesCard';

const Servicescard = ({servicescards}) => {
  // console.log(servicescards)
  return (
    <>  <div className='text-[#4169E1] text-3xl text-center font-semibold mt-12'>
    <span className='shadow-2xl block md:inline-block  rounded-full p-0 md:p-3'>~ Services We Provide ~</span>
  </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 '>
      {
        servicescards.map(aservicescards=> <AservicesCard key={aservicescards.id} aservicescards={aservicescards} ></AservicesCard>)
      }
    </div>
    </>
  );
};

export default Servicescard;