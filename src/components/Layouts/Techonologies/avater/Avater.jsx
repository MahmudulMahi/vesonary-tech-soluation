import React from 'react';

const Avater = ({ ava }) => {
  const { name, image, thumbnail } = ava
  return (
    <div>
      <div className='grid '>
     
          <div className="relative ">
            <img src={thumbnail} alt="" />
            <div className='absolute  z-10 top-12 left-10 w-20 h-16 '>
              <img src={image} />

            </div>
          </div>
          <div className='text-center text-[#4169E1]'>
            <p>{name}</p>
          </div>
      
      </div>
    </div>
  );
};

export default Avater;


