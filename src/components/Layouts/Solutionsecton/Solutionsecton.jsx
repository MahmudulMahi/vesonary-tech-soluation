// import bgimagerec1 from '../../../../public/asset/solution.jpg'
import bgimg from '/asset/Rectangle 253.png'
import bgrec1 from '/asset/Rectangle 275.png'
import solutionimg from '/asset/solution.jpg'

const Solutionsecton = () => {
  return (
    <>
      <div className='flex flex-col md:flex-col lg:flex-row mt-20 gap-20 mx-auto  justify-center items-center'>
        <div className='relative'>

          <img className="rounded-2xl p-5" style={{ width: '500px', height: '440px' }} src={bgrec1} alt="" />
          <div className='absolute top-12 l -right-8 md:left-16 pr-6'>
            <img className="rounded-2xl" style={{ width: '450px', height: '400px' }} src={solutionimg} alt="" />
          </div>

        </div>

        <div>
        <h2 className='text-3xl text-[#4169E1] font-medium shadow-2xl rounded-full p-3 '>Software Development & Consulting Services~</h2>
          <p className='mt-8 font-medium text-xl md:text-3xl md:text-center'> <span className='text-[#4169E1]'>Technology</span> like art is a soaring <br /> exercise of the human imagination </p>
          <div className="relative mt-8">
            <img className='w-[620px] h-[280px] ' src={bgimg} alt="" />
            <div className="absolute w-[350px] md:w-[450px] top-0 md:top-8 left-11  md:left-20 sm:text-xs md:text-lg pr-9 md:pr-1">
              <span className='block '>
                If you're looking for random paragraphs, you've come to the right place.  We created the Random Paragraph Generator with you in mind.
              </span>

              <span className='block ' >
                While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful.
              </span>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutionsecton;