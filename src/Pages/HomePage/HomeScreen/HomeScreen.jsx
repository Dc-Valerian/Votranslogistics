
import Hero from "../Hero/Hero";
import OurServices from "../OurServices/OurServices";
import Services from "../QualityServices/Services";
import OurInfo from "../Info/OurInfo";
import CalltoHelp from "../CalltoHelp/CalltoHelp";
import Slider from "../Testimonials/Slider";

const HomeScreen = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CalltoHelp/>
      <Services/>
      <OurInfo/>
      <OurServices/>
      <Slider/>
    </div>
  );
};

export default HomeScreen;
