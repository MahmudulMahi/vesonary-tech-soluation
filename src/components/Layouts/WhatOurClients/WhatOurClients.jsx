import profailimg from '/asset/Rectangle 303 (1).png'
import coma1 from '/asset/icon-park-outline_quote.png'
import coma2 from '/asset/coma2.png'
import icon1 from '/asset/Group 527.png'
const WhatOurClients = () => {

  
  return (
    <div className=" mt-12 p-10"  >
      <div className='text-[#4169E1] text-3xl text-center font-semibold mt-8'>
        <span className='shadow-2xl block md:inline-block  rounded-full p-0 md:p-3'>~ What Our Clients think ~</span>
      </div>
      <div className="carousel flex  w-full  mt-20 " >
        <div id="item1" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
           <div className='flex '>
            <img className='w-[30px] h-[30px]' src={coma1} alt="" />
            <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“</p>
           </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative mt-6  '>
            <img src={profailimg} className="w-[220px]   " />
            <div className='absolute top-2 right-10 md:right-96 lg:right-10 '>
            <img src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item2" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
           <div className='flex '>
            <img className='w-[30px] h-[30px]' src={coma1} alt="" />
            <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“</p>
           </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10'>
            <img src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item3" className=" flex flex-col md:flex-col lg:flex-row  carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
           <div className='flex '>
            <img className='w-[30px] h-[30px]' src={coma1} alt="" />
            <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“</p>
           </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10'>
            <img src={coma2} alt="" />
            </div>
          </div>
        </div>
        <div id="item4" className=" flex flex-col md:flex-col lg:flex-row carousel-item w-full space-x-28 mt-14 ">
          <div className='flex-1 '>
            <h2 className='text-4xl mb-3'>Interactive Minded</h2>
           <div className='flex '>
            <img className='w-[30px] h-[30px]' src={coma1} alt="" />
            <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.“</p>
           </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-" />
            <div className='flex gap-5'>
              <div>
                <img src={icon1} alt="" />
              </div>
              <div>
                <h2>MD: Sazzadul Alam Sajib</h2>
                <p className='text-[#4169E1] mt-3'>Figma Designer</p>
              </div>
              <div className='ml-4 md:ml-64'>
                <h2>Fiver</h2>
                <div className="rating mt-3">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className='pr-12 relative '>
            <img src={profailimg} className="w-[220px]" />
            <div className='absolute top-2 right-10 '>
            <img src={coma2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item4" className="btn btn-xs">4</a>
      </div>
    </div>
  );
};

export default WhatOurClients;