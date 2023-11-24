
import AboutBanner from '../../Layouts/AboutBanner/AboutBanner';
import AboutOurTeam from '../../Layouts/AboutOurTeam/AboutOurTeam';
import WhoWeAre from '../../Layouts/WhoWeAre';
import Contactus from '../../Layouts/contactus/Contactus';


const About = () => {

  return (
    <>
    <AboutBanner></AboutBanner>
    <div className="max-w-7xl mx-auto ">
      
      <WhoWeAre></WhoWeAre>
      
      
      <AboutOurTeam></AboutOurTeam>
      <Contactus></Contactus>
    </div>
    </>
  );
};

export default About;