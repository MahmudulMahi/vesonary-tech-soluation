import OurBoard from "../../Layouts/OurBoard/OurBoard";
import Contactus from "../../Layouts/contactus/Contactus";
import Teambanner from "../../Layouts/teambanner/Teambanner";


const Team = () => {
  return (
    <div>
      <Teambanner></Teambanner>
      <div className="max-w-7xl mx-auto ">
        <OurBoard></OurBoard>
        <Contactus></Contactus>


      </div>
    </div>
  );
};

export default Team;