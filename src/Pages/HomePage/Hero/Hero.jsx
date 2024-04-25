import { Fade } from "react-awesome-reveal";
import Button from "../../../Components/ButtonProps/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';


const Hero = () => {
 
  return (
    <div id="home" className="relative">

     
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
        data-swiper-autoplay="2000"
      >
    
    
        <SwiperSlide>
        <div className="w-full  flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover">
          <div className="w-full pb-36 bg-black bg-opacity-70 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
            <div className=" flex w-[90%] justify-center flex-col mt-56 w text-white xmd:mt-36 ">
            <Fade direction="down">
                <p className="text-[white] bg-[#0092FF] text-[19px] sm:text-sm w-[250px] font-[600] uppercase tracking-[1px] py-[4px]">
                Votrans limited
                </p>
              </Fade>
              <Fade duration={2000}>
                <div className="w-[900px] xmd:w-full text-5xl lg:w-full font-bold xmd:text-4xl xmd:text-center  flex">
                Freight Experts
                </div>
              </Fade>
              <Fade direction="down">
                <p className="text-white text-2xl mt-3 sm:text-sm w-[500px] flex ">
                for all your export and import needs in Nigeria
                </p>
              </Fade>

              <div className="xmd:w-full xmd:flex xmd:justify-center xmd:items-center w-fit">
                <Fade direction="up">
                  <Button width="192px" text="Get Started" backgroundColor="#FF641D" height="30px"/>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
     
    
        <SwiperSlide>
        <div className="w-full  flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover">
          <div className="w-full pb-36 bg-black bg-opacity-70 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
          <div className=" flex w-[90%] justify-center flex-col mt-56 w text-white xmd:mt-36 ">
            <Fade direction="down">
                <p className="text-[white] bg-[#0092FF] text-[19px] sm:text-sm w-[250px] font-[600] uppercase tracking-[1px] py-[4px]">
                Votrans limited
                </p>
              </Fade>
              <Fade duration={2000}>
                <div className="w-[900px] xmd:w-full text-5xl lg:w-full font-bold xmd:text-4xl xmd:text-center  flex">
                Shipping Experts
                </div>
              </Fade>
              <Fade direction="down">
                <p className="text-white text-2xl mt-3 sm:text-sm w-[500px] flex ">
                for all your export and import needs in Nigeria
                </p>
              </Fade>

              <div className="xmd:w-full xmd:flex xmd:justify-center xmd:items-center w-fit">
                <Fade direction="up">
                  <Button width="192px" text="Get Started" backgroundColor="#FF641D"/>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
     
    
        <SwiperSlide>
        <div className="w-full  flex justify-center overflow-hidden bg-no-repeat bg-center bg-cover">
          <div className="w-full pb-36 bg-black bg-opacity-70 flex flex-col  justify-center items-center  xmd:justify-center xmd:flex xmd:items-center">
          <div className=" flex w-[90%] justify-center flex-col mt-56 w text-white xmd:mt-36 ">
            <Fade direction="down">
                <p className="text-[white] bg-[#0092FF] text-[19px] sm:text-sm w-[250px] font-[600] uppercase tracking-[1px] py-[4px]">
                Votrans limited
                </p>
              </Fade>
              <Fade duration={2000}>
                <div className="w-[900px] xmd:w-full text-5xl lg:w-full font-bold xmd:text-4xl xmd:text-center  flex">
                Logistics Experts
                </div>
              </Fade>
              <Fade direction="down">
                <p className="text-white text-2xl mt-3 sm:text-sm w-[500px] flex ">
                for all your export and import needs in Nigeria
                </p>
              </Fade>

              <div className="xmd:w-full xmd:flex xmd:justify-center xmd:items-center w-fit">
                <Fade direction="up">
                  <Button width="192px" text="Get Started" backgroundColor="#FF641D"/>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Hero;
