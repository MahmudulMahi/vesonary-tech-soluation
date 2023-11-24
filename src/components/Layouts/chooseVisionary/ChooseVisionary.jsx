import icon1 from '/asset/ri_team-line.png'
// import bgimagerec1 from '../../../../public/asset/iconoir_agile.png'
import icon2 from '/asset/ri_stack-fill.png'
import icon3 from '/asset/iconoir_agile.png'
import icon4 from '/asset/material-symbols_partner-exchange.png'
import icon5 from '/asset/icon-park-outline_focus-one.png'
import icon6 from '/asset/iconoir_agile.png'

const ChooseVisionary = () => {
  return (
    <div className='mt-20 '>
      <h2 className='text-[#4169E1] text-3xl text-center font-semibold'><span className='shadow-2xl rounded-full p-0 md:p-3 block md:inline-block  '>~Why Choose Visionary Tech~</span></h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mt-5'>
       
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon1} alt="" />
            <p className='text-[#4169E1] text-xl'>We're an Extension of your Team</p>

            <p className='text-sm'>Our team approaches every project like it’s the first of many engagements where long-term client satisfaction is at the core of every decision made.</p>
           
          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon2} alt="" />
            <p className='text-[#4169E1] text-xl'>Full-Stack Expertise</p>

            <p className='text-sm'>With experts in cloud infrastructure, database design, application architecture, UI/UX and more, our team has all your software needs covered for this project AND your next one.</p>
           
          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon3} alt="" />
            <p className='text-[#4169E1] text-xl'>Agile Development </p>

            <p className='text-sm'>We focus on doing the right things to fuel your growth, nothing more, nothing less.</p>
           
          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon4} alt="" />
            <p className='text-[#4169E1] text-xl'>We Value Client, Over New Sales</p>

            <p className='text-sm'>Long-term client partnerships and an impressive track record of delivery allows us to focus on delivering solutions over sales tactics.</p>
           
          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon5} alt="" />
            <p className='text-[#4169E1] text-xl'>Solutions Focused, not Hours Focused</p>

            <p className='text-sm'>Our goal with every project is to minimize the need for custom development by leveraging existing best-in-class tools to solve our clients' problems.</p>
           
          </div>
        </div>
        {/* ----------- */}
        {/* ----------- */}
        <div className="card  h-72 bg-base-100 shadow-xl">
          <div className="card-body">
            <img className='w-8' src={icon6} alt="" />
            <p className='text-[#4169E1] text-xl'>Complete Delivery</p>

            <p className='text-sm'>Don't just “rent a developer”. With Emergent, you'll engage a full team of software pro's including designers, developers and testers until the job is done.</p>
           
          </div>
        </div>
        {/* ----------- */}
      </div>
    </div>
  );
};

export default ChooseVisionary;