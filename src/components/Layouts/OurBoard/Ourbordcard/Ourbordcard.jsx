import React from 'react';

const Ourbordcard = ({pro}) => {
  const{name,image,designation}=pro
  return (
    <div>
    <div className="card card-compact w-96 md:w-80 lg:w-96 h-96  bg-base-100 shadow-xl bg-cover relative " style={{
    
    backgroundImage: "url('/asset/profailpic.png')", backgroundSize: "320px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: ""
  }}>
      <div>
      <figure><img className='w-52 h-56 rounded-full absolute top-8 left-[78px] ' src={image} alt="Shoes" /></figure>
      </div>
      <div className="card-body absolute bottom-0">
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
     
      </div>
    </div>
  </div>
  );
};

export default Ourbordcard;