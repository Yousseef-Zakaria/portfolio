import LeftSection from "./Left-Section/Left-Section-Hero";
import RightSection from "./Right-Section/Right-Section";
import './Hero.css';
export const Hero = () => {
  return (
    <div className="flex justify-around md:mb-20 items-center ">   
    <LeftSection />
    <div id="DEV-text" className="md:block hidden" >
      DEV
    </div>
    <RightSection />
    </div>

  )
};
export default Hero;