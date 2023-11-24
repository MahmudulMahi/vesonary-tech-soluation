
import Banner from "../../Layouts/Banner/Banner";

import Solutionsecton from "../../Layouts/Solutionsecton/Solutionsecton";
import Techonologies from "../../Layouts/Techonologies/Techonologies";
import ChooseVisionary from "../../Layouts/chooseVisionary/ChooseVisionary";
import Contact from "../../Layouts/contact/Contact";
import WhatOurClients from "../../Layouts/WhatOurClients/WhatOurClients";
import ProudJourney from "../../Layouts/ProudJourney/ProudJourney";





const Home = () => {

  return (
    <div >

      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Solutionsecton></Solutionsecton>
        <ChooseVisionary></ChooseVisionary>
        <Techonologies></Techonologies>
        <ProudJourney></ProudJourney>
        <WhatOurClients ></WhatOurClients>
        <Contact></Contact>
      </div>

    </div>
  );
};

export default Home;