
import moment from "moment";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const currentDate = moment().format("YYYY");
 

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#020202] pt-[50px] pb-[20px] mobile:pb-[30px] mobile:pt-[20px] gap-[50px]">
 <div
 className=" flex w-[90%]  justify-between flex-wrap mobile:gap-[20px]"
 >
<div className=" w-[300px] flex flex-col gap-[20px]">   <a className="block text-teal-600" href="/">
              <img
                src="https://res.cloudinary.com/dbpcptmco/image/upload/v1712588364/Votrans-Logo-1_007c003b1_3304-removebg-preview_qefdob.png"
                alt="Header_Image"
                draggable="false"
                className=" h-[200px] object-contain w-[200px]"
              />
            </a>
        
            
            </div>
            
<div className=" text-[white]  w-[200px] flex flex-col gap-[15px]  justify-start">
  <text
  className="text-[19px] leading-[18px] font-[700] hover:cursor-pointer hover:underline hover:underline-offset-2">
    Quick Link
  </text>
  <nav  className="text-[16px] font-[400]  text-[white] leading-[16px] transition hover:text-[#ff5e14] hover:cursor-pointer">Home</nav>
  <nav  className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-[#ff5e14] hover:cursor-pointer">About</nav>
  <nav  className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-[#ff5e14] hover:cursor-pointer">Services</nav>
  <nav  className="text-[16px] font-[400] text-[white]  leading-[16px] transition hover:text-[#ff5e14]  hover:cursor-pointer">Contact</nav>
</div>

<div className=" text-[white]  w-[300px] flex flex-col gap-[20px]  justify-start">
  <text
  className="text-[19px] leading-[18px] font-[700] hover:cursor-pointer hover:underline hover:underline-offset-2"
  >
    Contact
  </text>
  <nav  className="text-[16px] font-[400] leading-[18px]  text-[white] flex items-center gap-[11px]">
  <div className="text-[16px] text-[#E41818]">
     <FaLocationDot/>
    </div>
    7 Bombay Crescent,
Apapa, Lagos, Nigeria.</nav>
  <nav  className="text-[16px] font-[400] leading-[16px]  text-[white] flex items-center gap-[10px]">
    <div>
      <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1710753293/Vector_1_ys5ovq.png" alt="email_Image" draggable="false" />
    </div>
    frankjohn@votranslogistics.com
</nav>
  <nav  className="text-[16px] font-[400] leading-[16px]  text-[white] flex items-center gap-[10px]">
  <div>
      <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1710753293/Vector_2_fuzgej.png" alt="phone_Image" draggable="false" />
    </div>
    (+234) 0809-592-6054</nav>
  
</div>

 </div>
 <div
 className="text-[13px] font-[400] text-[white]"
 >© {currentDate}. Votrans Limited / All rights reserved</div>
    </div>
  );
};

export default Footer;