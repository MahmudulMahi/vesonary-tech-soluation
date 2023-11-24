import proudicon1 from '/asset/Rating.png'
import proudicon2 from '/asset/Global Businessman.png'
import proudicon3 from '/asset/Vecto111.png'
import proudicon4 from '/asset/Time Zone.png'
import proudicon5 from '/asset/iconicon.png'


const ProudJourney = () => {
  return (
    <div>
      <div className='text-[#4169E1] text-3xl text-center font-semibold mt-8'>
        <span className='shadow-2xl rounded-full p-0 md:p-3'>~We Are Proud of Our Journey~</span>
      </div>

      <div className='flex flex-col md:flex-col lg:flex-row justify-between gap-4 mt-10 mx-auto'>
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center px-12">
            <img src={proudicon1} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2+</p>
            <p className='text-[24px]'>Years of  <br/>
            Experience</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body items-center text-center px-8">
            <img src={proudicon2} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2.5k+</p>
            <p className='text-[24px]'>Of customers <br/>
            worldwide</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card    bg-base-100 shadow-xl">
          <div className="card-body items-center text-center px-12">
            <img src={proudicon3} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>2.5k+</p>
            <p className='text-[24px]'>Projects <br/>
            Delivered</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body items-center text-center px-12">
            <img src={proudicon4} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>13</p>
            <p className='text-[24px]'>Time zone <br/>
            covered</p>

          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}
        <div className="card   bg-base-100 shadow-xl">
          <div className="card-body items-center text-center px-12">
            <img src={proudicon5} alt="" />
            <p className='text-3xl text-[#4169E1] font-bold'>4.9/5</p>
            <p className='text-[24px]'>Customer <br/>
              rating</p>
          </div>
        </div>
        {/* ----------- */}
        {/* ---------- */}


      </div>

    </div>
  );
};

export default ProudJourney;