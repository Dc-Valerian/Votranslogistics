import { TiWorld } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";


const Info2 = () => {
  return (
    <div className=" flex items-center justify-center h-[600px] xmd:flex-col xmd:h-fit xmd:gap-[20px]">
            <div
        className=" w-[50%] h-[100%] flex justify-center items-center xmd:w-[90%]"
        >
            <img src="https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/banner3.jpg" alt="" className="h-[100%] w-[100%] object-cover xmd:rounded-[20px]" />
        </div>


        <div
           className="bg-[#F9F8FF] h-[100%] w-[50%] flex items-center justify-center xmd:w-[90%] xmd:px-[20px] xmd:py-[20px] xmd:rounded-[20px]"
        >
          <div 
              className=" w-[80%] flex  flex-col gap-[30px] xmd:w-[100%]"
          >
   <div className="flex gap-[5px] flex-col ">
 <div>
 <h3 className="text-[#ff5e14] text-[14px] font-[600] xmd:text-[13px]">YOUR PACKAGE, YOUR RULES</h3>
       <h1 className="text-[#111] text-[40px] font-[700] w-[95%] leading-[50px] xmd:text-[30px] xmd:leading-[40px]">Digital Freight That Saves Your Time!
</h1>
 </div>
<p className="text-[18px] text-[#777] font-[400] ">
Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere
</p>
   </div>
       <div className=" flex flex-col gap-[40px]">

   
<div className="flex items-center justify-between  xmd:w-[100%] xmd:flex-wrap xmd:gap-[20px]">

<div className=" w-[25%] flex flex-col justify-center gap-[10px] xmd:w-[40%]">
      <div className="flex items-center text-[50px] text-[#ff5e14]">
            <TiWorld />
            </div>
            <div className="flex justify-center flex-col w-[100%] ">
                <h2 className="text-[#111] text-[50px] font-[700] hover:text-[#ff5e14]">
                3100
                </h2>
                <p className="text-[16px] text-[#ff5e14] font-[700] ">
                Clients Worldwide
                </p>
            </div>
          </div>

<div className=" w-[25%] flex flex-col justify-center gap-[10px] xmd:w-[40%]">
      <div className="flex items-center text-[50px] text-[#ff5e14]">
            <TbTruckDelivery />
            </div>
            <div className="flex justify-center flex-col w-[100%] ">
                <h2 className="text-[#111] text-[50px] font-[700] hover:text-[#ff5e14]">
                2020
                </h2>
                <p className="text-[16px] text-[#ff5e14] font-[700] ">
                Delivered Goods
                </p>
            </div>
          </div>

<div className=" w-[25%] flex flex-col justify-center gap-[10px] xmd:w-[40%]">
      <div className="flex items-center text-[50px] text-[#ff5e14]">
            <TiThSmallOutline />
            </div>
            <div className="flex justify-center flex-col w-[100%] ">
                <h2 className="text-[#111] text-[50px] font-[700] hover:text-[#ff5e14]">
                1912
                </h2>
                <p className="text-[16px] text-[#ff5e14] font-[700] ">
                Miles Driven
                </p>
            </div>
          </div>

</div>
    

       </div>

          </div>
        </div>
    
    </div>
  )
}

export default Info2