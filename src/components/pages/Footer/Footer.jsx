import icon1 from '/asset/Group 527.png'
import socalicon1 from '/asset/logos_facebook.png'
import socalicon2 from '/asset/skill-icons_linkedin.png'
import socalicon3 from '/asset/Instragram Icon.png'
import socalicon4 from '/asset/Twitter Icon.png'
import contacticon1 from '/asset/Group 171.png'
import contacticon2 from '/asset/dashicons_email-alt.png'
import contacticon3 from '/asset/mingcute_location-3-line.png'
// import bgimagerec1 from '../../../../public/asset/aerial.jpg'

const Footer = () => {
  return (

    <footer className=" p-10 bg-base-200 text-base-content mt-8 ">

      <div className="footer mx-auto max-w-7xl">

        <div>
          <img className='w-[100px]' src={icon1} alt="" />

          <h2 className='font-medium text-3xl'>Visionary</h2>
          <p className='text-xl'>Tech Solutions</p>

          <p className='w-60'>Assurance yet bed was improving furniture man. Distrusts delighted Excuse few the remain highly feebly add people manner say. It high at my mind by roof. </p>

          <div>
            <h2 className='text-2xl mb-4'>Find Us on social media</h2>
            <div className='flex gap-4'>
              <img src={socalicon1} alt="" />
              <img src={socalicon2} alt="" />
              <img src={socalicon3} alt="" />
              <img src={socalicon4} alt="" />
            </div>
          </div>
        </div>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Team</a>
          <a className="link link-hover">Project</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Web Design</a>
          <a className="link link-hover">UI/UX Design</a>
          <a className="link link-hover">Artificial Intelligence ( AI )</a>

          <a className="link link-hover">SEO ( Search Engine Optimization )</a>
          <a className="link link-hover">Digital Marketing</a>
          <a className="link link-hover">Cyber Security</a>
          <a className="link link-hover">Graphics Design</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Info</header>
          <div className='flex gap-2'>
            <div>
              <img className='w-4 h-4 mt-2' src={contacticon1} alt="" />
            </div>
            <div>
              <p>+8801234-567890</p>
              <p>+8801618-4123264</p>
            </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <div>
              <img className='w-4 h-4 mt-2' src={contacticon2} alt="" />
            </div>
            <div>
              <p>info@visionary.com</p>
              <p>vts@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <div>
              <img className='w-4 h-4 mt-2' src={contacticon3} alt="" />
            </div>
            <div>
              <p>House no - 123, Dhaka,</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </nav>
      </div>

    </footer >

  );
};

export default Footer;