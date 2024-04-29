import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa6";

const Slider = () => {
  return (
    
    <div className='w-full h-[500px]  mt-[30px] text-[white] '>
    <>
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
      >
    
    
        <SwiperSlide>
            <div className='bg-[#404345] bg-opacity-80 w-full h-full flex items-center justify-center'>
        <div className="w-[50%] flex flex-col gap-[20px] items-center">
        <div className='h-[100px] w-[100px]'>   
            <Fade duration={2000}>
             <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/team1.jpg" alt="" className='h-[30%] w-[30%] rounded-[50%] object-cover'/>
            </Fade></div>

            <Fade direction="down">
              <p className="text-white text-[20px] font-[400] leading-[30px] mt-3 xmd:text-center sm:text-sm">
            <div>
<FaQuoteLeft/>
            </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias id qui beatae laboriosam quam. Ab, nostrum error qui animi sint facilis exercitationem quaerat repellat? Voluptatem totam voluptatibus iste quod voluptas.
              </p>
            </Fade>

           <div> <Fade duration={2000}>
              <h2 className="xmd:w-full text-2xl lg:w-full font-bold xmd:text-4xl xmd:text-center text-[#FF5E14]">
             Dennis Wilson
              </h2>
              <h3 className="  xmd:w-full text-1xl lg:w-full font-bold xmd:text-4xl xmd:text-center ">
             Customer
              </h3>
            </Fade></div>
          </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-[#404345] bg-opacity-80 w-full h-full flex items-center justify-center'>
        <div className="w-[50%] flex flex-col gap-[20px] items-center">
        <div className='h-[120px] w-[120px]'>   
            <Fade duration={2000}>
             <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/team2.jpg" alt="" className='h-[30%] w-[30%] rounded-[50%] object-cover'/>
            </Fade></div>

            <Fade direction="down">
              <p className="text-white text-[20px] font-[400] leading-[30px] mt-3 xmd:text-center sm:text-sm">
            <div>
<FaQuoteLeft/>
            </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias id qui beatae laboriosam quam. Ab, nostrum error qui animi sint facilis exercitationem quaerat repellat? Voluptatem totam voluptatibus iste quod voluptas.
              </p>
            </Fade>

           <div> <Fade duration={2000}>
              <h2 className="xmd:w-full text-2xl lg:w-full font-bold xmd:text-4xl xmd:text-center text-[#FF5E14]">
             Tommy Sakura
              </h2>
              <h3 className="  xmd:w-full text-1xl lg:w-full font-bold xmd:text-4xl xmd:text-center ">
             Customer
              </h3>
            </Fade></div>
          </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-[#404345] bg-opacity-80 w-full h-full flex items-center justify-center'>
        <div className="w-[50%] flex flex-col gap-[20px] items-center">
        <div className='h-[120px] w-[120px]'>   
            <Fade duration={2000}>
             <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/team3.jpg" alt="" className='h-[30%] w-[30%] rounded-[50%] object-cover'/>
            </Fade></div>

            <Fade direction="down">
              <p className="text-white text-[20px] font-[400] leading-[30px] mt-3 xmd:text-center sm:text-sm">
            <div>
<FaQuoteLeft/>
            </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias id qui beatae laboriosam quam. Ab, nostrum error qui animi sint facilis exercitationem quaerat repellat? Voluptatem totam voluptatibus iste quod voluptas.
              </p>
            </Fade>

           <div> <Fade duration={2000}>
              <h2 className="xmd:w-full text-2xl lg:w-full font-bold xmd:text-4xl xmd:text-center text-[#FF5E14]">
             Pedro Divine
              </h2>
              <h3 className="  xmd:w-full text-1xl lg:w-full font-bold xmd:text-4xl xmd:text-center ">
             Customer
              </h3>
            </Fade></div>
          </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-[#404345] bg-opacity-80 w-full h-full flex items-center justify-center'>
        <div className="w-[50%] flex flex-col gap-[20px] items-center">
        <div className='h-[120px] w-[120px]'>   
            <Fade duration={2000}>
             <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/team4.jpg" alt="" className='h-[30%] w-[30%] rounded-[50%] object-cover'/>
            </Fade></div>

            <Fade direction="down">
              <p className="text-white text-[20px] font-[400] leading-[30px] mt-3 xmd:text-center sm:text-sm">
            <div>
<FaQuoteLeft/>
            </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias id qui beatae laboriosam quam. Ab, nostrum error qui animi sint facilis exercitationem quaerat repellat? Voluptatem totam voluptatibus iste quod voluptas.
              </p>
            </Fade>

           <div> <Fade duration={2000}>
              <h2 className="xmd:w-full text-2xl lg:w-full font-bold xmd:text-4xl xmd:text-center text-[#FF5E14]">
            Mike Dike
              </h2>
              <h3 className="  xmd:w-full text-1xl lg:w-full font-bold xmd:text-4xl xmd:text-center ">
             Customer
              </h3>
            </Fade></div>
          </div>
            </div>
        </SwiperSlide>

    
      </Swiper>
    </>



        </div>
      
  )
}

export default Slider