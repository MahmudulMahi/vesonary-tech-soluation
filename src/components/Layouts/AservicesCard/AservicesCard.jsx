import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const AservicesCard = ({ aservicescards }) => {

  const { id, title,  details, icon, image,image1,image2, detailstitle, description,titlemodal } = aservicescards || {}
 const modalId = `my_modal_${id}`;

 
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={icon} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>

        </div>
        <div className="card-actions justify-end">
          {/* <button onClick={toggleDetails} className="btn btn-primary  ">Learn more </button> */}
          <button className="p-5 flex items-center gap-2 text-[#008000]" onClick={() => document.getElementById(modalId).showModal()}>learn more <FaArrowRight /></button>
          <dialog id={modalId} className="modal">
            <div className="modal-box w-full  max-w-7xl p-2">
              <div className='flex flex-col-reverse md:flex-row  gap-8 items-center justify-center'>
                <div className='flex-1'>
                  <div>
                    <div className='text-3xl font-bold pb-5'>
                    <h2>{titlemodal}</h2>
                    </div>
                    <h3 className="font-bold text-lg">{detailstitle}</h3>
                  </div>
                  <div className=''>
                    
                    <p className="py-4">{description}</p>
                  </div>
                </div>
                <div className='flex-1 bg-no-repeat ' style={{ backgroundImage: "url('/asset/Rectangle 446.png')",
                width:"100%",
                maxwidth: "450px",
                height: "450px",
                Shadow:"none"
                // transform: "rotate(deg)",
                // transformOrigin: "center center",
                 }}>

                 <div className='flex mt-16 items-center justify-center space-x-5'>
                 <div >
                    <img className='w-[100px] h-[200px]  md:w-[300px] md:h-[300px] ' src={image} alt="" />
                  </div>
                  <div className='space-y-4' >
                    <img className='w-[150px] h-[100px]' src={image1} alt="" />
                    <img className='w-[150px] h-[100px]' src={image2} alt="" />
                  </div>
                 </div>
                  
                </div>
                
            
            
              </div>
              <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
          
          </dialog>
        
          </div>
        </div>


     

      {/* {showDetails && <div> */}
        {/* <div className='w-[1000px] h-full'>
          <div>
            <h2>{detailstitle}</h2>
          </div>
          <div>
            <h2>{description}</h2>
          </div>
          <div>
          <img src={image} alt="" />
          </div>
        </div> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}


      {/* </div>
      } */}
    </>
  );
};

export default AservicesCard;