import LeftSection from "./Left-Section/Left-Section-Hero";
import RightSection from "./Right-Section/Right-Section";
import './Hero.css';
export const Hero = () => {
  return (
    <div className="flex justify-around items-center mt-40">   
    <LeftSection />
    <div id="DEV-text" >
      DEV
    </div>
    <RightSection />
    </div>

  )
};
export default Hero;