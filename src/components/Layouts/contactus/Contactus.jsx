
import { BsArrowRightCircle } from "react-icons/bs";

const Contactus = () => {
  return (
    <div className="hero  h-[300px] mt-12" style={{ backgroundImage: "url('/asset/Rectangle 452.png')" }}>
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
      
          <button className="text-5xl mt-4"><BsArrowRightCircle></BsArrowRightCircle></button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;