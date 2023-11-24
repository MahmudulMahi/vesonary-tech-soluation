import whoareimg from '/asset/aerial.jpg'

const AboutOurTeam = () => {
  return (
    <div className='flex flex-col md:flex-row gap-20 mt-12'>
      <div className='flex-1' >
        <img className='w-[600px] h-[300px] md:h-[430px] rounded-lg' src={whoareimg} alt="" />
      </div>
      <div className='flex-1'>
        <h2 className="text-3xl text-[#4169E1] mt-4 font-medium mb-10"> <span className='shadow-2xl rounded-full p-3 '>~About Our Team~</span></h2>
        <span className='block mb-3'>
          Since 2022 Visionary Tech Solution has national presence, offering Information Technologies solutions, committed with the innovation, quality and any adjustment for the company´s requirements, our culture is set by values that contributes to create a flexible, creative, implication related and teamwork.
        </span>

        <span className='block mb-3'>
          We believe that our customers’ success is our own success, this is why we stablish strategic alliances with our customers in their IT projects development in Bangladesh.
        </span>

        <span>
          We have a wide experience at technical level, a young professional team, with a solid academic formation and advances technical skills who let us deliver high quality solutions to any kind of company
        </span>
        <div className='mt-7'>
          <button className="btn  rounded-3xl border-[#4169E1]"><span className='text-[#4169E1]'>Meet our team</span></button>
        </div>
      </div>

    </div>
  );
};

export default AboutOurTeam;
