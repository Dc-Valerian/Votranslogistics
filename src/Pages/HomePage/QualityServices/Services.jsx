import {SiSemanticuireact} from "react-icons/si"
import { IoMdAirplane } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
// import "./Services.css"

const Services = () => {
  return (
    <div className=" h-[500px] flex items-center justify-center xmd:h-fit xmd:py-[20px]">
     <div className="flex flex-col w-[90%] items-center gap-[40px] ">

     <div className="flex flex-col items-center justify-center gap-[10px] w-[55%]  xmd:w-[95%]">
           <h3 className="text-[#ff5e14] text-[14px] font-[600]">
            WHAT WE DO
           </h3>
           <h1 className="text-[#111] text-[45px] font-[700] leading-[50px] text-center xmd:text-[30px] xmd:leading-[35px]">
           What We Offer To Highest Quality Services    
           </h1>
        </div>

        <div className="w-[90%] flex justify-center gap-[30px] flex-wrap items-center">
          <div className="w-[30%] flex items-center justify-center flex-col gap-[10px] xmd:w-[90%] shadow-md  hover:shadow-2xl py-[20px] rounded-[20px] cursor-pointer">
            <div className="bg-[white] h-[80px] w-[80px] rounded-[50%] flex items-center justify-center text-[40px] text-[#ff5e14]">
            <SiSemanticuireact />
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[#111] text-[24px] font-[700] hover:text-[#ff5e14]">
              Delivered Packages
                </h2>
                <p className="text-[18px] text-[#777] font-[400] text-center">Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit..</p>
            </div>
          </div>

          <div className=" w-[30%] flex items-center justify-center flex-col gap-[10px] xmd:w-[90%] shadow-md  hover:shadow-2xl py-[20px] px-[10px] rounded-[20px] cursor-pointer">
          <div className="bg-[white] h-[80px] w-[80px] rounded-[50%] flex items-center justify-center text-[40px] text-[#ff5e14]">
            <IoMdAirplane />
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[#111] text-[24px] font-[700] hover:text-[#ff5e14]">
                Air Freight
                </h2>
                <p className="text-[18px] text-[#777] font-[400] text-center">For quick movement of goods internationally.</p>
            </div>
          </div>

          <div className=" w-[30%] flex items-center justify-center flex-col gap-[10px] xmd:w-[90%] shadow-md  hover:shadow-2xl py-[20px] px-[10px] rounded-[20px] cursor-pointer">
          <div className="bg-[white] h-[80px] w-[80px] rounded-[50%] flex items-center justify-center text-[40px] text-[#ff5e14]">
            <GiWorld />
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[#111] text-[24px] font-[700] hover:text-[#ff5e14]">
                Countries Covered
                </h2>
                <p className="text-[18px] text-[#777] font-[400] text-center">For quick movement of goods internationally.</p>
            </div>
          </div>
        
        </div>
     </div>
    </div>
  )
}

export default Services