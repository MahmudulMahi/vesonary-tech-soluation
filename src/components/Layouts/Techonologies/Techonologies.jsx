import { useEffect, useState } from "react";
import Avater from "./avater/Avater";


// import bgimagerec12 from '../../../../public/asset/modern.png'
const Techonologies = () => {
 
  const [avater,setavater]=useState([])

  useEffect(()=>{
    fetch('/avater.json')
    .then(res =>res.json())
    .then(data => setavater(data))
  },[])
  return (
  <div>
    <h2 className='text-[#4169E1] text-3xl text-center font-semibold mt-10 mb-8'><span className='shadow-2xl rounded-full p-0 md:p-3'>~Technologies We Use~</span></h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 p-7">
      {
        avater.map(ava => <Avater key={ava.id} ava={ava}></Avater>)
      }
    </div>
  </div>
  );
};

export default Techonologies;