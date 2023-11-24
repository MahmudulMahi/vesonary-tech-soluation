import { useEffect, useState } from 'react';

import Ourbordcard from './Ourbordcard/Ourbordcard';

const OurBoard = () => {

  const [profail, setprofail]=useState([])

  useEffect(()=>{
    fetch('/profail.json')
    .then(res =>res.json())
    .then(data =>setprofail(data))
  },[])
  return (
    <div className="mt-14">
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold mt-10 mb-8'><span className='shadow-2xl rounded-full p-0 md:p-3'>~ Our Board ~</span></h2>

      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 mt-12'>
        {
          profail.map(pro => <Ourbordcard key={pro.id} className='flex-1 max-w-[calc(50%-1rem)] m-2' pro={pro}></Ourbordcard>)
        }
      </div>

   
    </div>
  );
};

export default OurBoard;