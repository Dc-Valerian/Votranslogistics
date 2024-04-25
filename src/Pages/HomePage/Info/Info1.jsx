import { FaCartPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Info1 = () => {
  return (
    <div className=" flex items-center justify-center h-[600px]  xmd:h-fit xmd:flex-col xmd:py-[20px]">
        <div
           className=" w-[50%] flex items-center justify-center xmd:w-[90%] xmd:pb-[20px]"
        >
          <div 
              className=" w-[80%] flex  flex-col gap-[30px]"
          >
   <div className=" xmd:flex xmd:text-center xmd:flex-col">
   <h3 className="text-[#ff5e14] text-[14px] font-[600]">OUR INFO</h3>
       <h1 className="text-[#111] text-[40px] font-[700] xmd:text-[35px]">Why choose our</h1>
   </div>

       <div className=" flex flex-col gap-[40px] xmd:gap-[30px] xmd:w-[100%]">

       <div className=" w-[90%] flex  gap-[30px] xmd:w-[100%] ">
      <div className="">
      <div className="bg-[#F4F6F9] h-[70px] w-[70px] rounded-[50%] flex items-center justify-center text-[35px] text-[#ff5e14] xmd:h-[40px] xmd:w-[40px] xmd:text-[23px]">
            <FaEye />
            </div>
      </div>
            <div className="flex  justify-center flex-col  w-[70%] gap-[10px] xmd:gap-[3px]">
                <h2 className="text-[#111] text-[24px] font-[700] hover:text-[#ff5e14] xmd:text-[22px]">
                    Our Vision
                </h2>
                <p className="text-[18px] text-[#777] font-[400] xmd:text-[18px]">
                Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.
                </p>
            </div>
          </div>

       <div className=" w-[90%] flex  gap-[30px] xmd:w-[100%] ">
      <div className="">
      <div className="bg-[#F4F6F9] h-[70px] w-[70px] rounded-[50%] flex items-center justify-center text-[35px] text-[#ff5e14] xmd:h-[40px] xmd:w-[40px] xmd:text-[23px]">
            <FaCartPlus />
            </div>
      </div>
            <div className="flex  justify-center flex-col  w-[70%] gap-[10px] xmd:gap-[3px]">
                <h2 className="text-[#111] text-[24px] font-[700] hover:text-[#ff5e14] xmd:text-[22px]">
                Estimate Shipping
                </h2>
                <p className="text-[18px] text-[#777] font-[400] ">
                Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.
                </p>
            </div>
          </div>
       </div>

          </div>
        </div>
        <div
        className=" w-[50%] h-[100%] flex justify-center items-center xmd:h-[300px] xmd:w-[90%]"
        >
            <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/banner2.jpg" alt="" className="h-[100%] w-[100%] object-cover xmd:rounded-[10px]" />
        </div>
    </div>
  )
}

export default Info1