
const CalltoHelp = () => {
  return (
    <div className="h-32 flex items-center justify-evenly  my-[40px]  flex-wrap  xmd:h-fit  xmd:gap-[20px]  xmd:py-[25px]">
        <div className=" h-[65%] flex flex-col justify-evenly  xmd:w-[90%]">
         <h2 className="font-[600] text-[22px]  xmd:text-[20px]">Call Our Support</h2>
         <div className="text-[18px] text-[#A9AAAF] xmd:text-[17px]">
            24 / 7 Support Line: +1(21) 234 557 4567
         </div>
        </div>
        <div className=" h-[65%] flex flex-col justify-evenly  xmd:w-[90%]">
         <h2 className="font-[600] text-[22px] xmd:text-[20px]"> Our Location</h2>
         <div className="text-[18px] text-[#A9AAAF] xmd:text-[17px]">
         Shipper, #2214 Honey street, NY - 62617.
         </div>
        </div>
        <div className=" h-[74%] flex flex-col justify-evenly xmd:flex  xmd:h-fit xmd:w-[90%]">
         <h2 className="font-[600] text-[22px] xmd:text-[20px]">Our Newsletter</h2>
         <div className="flex gap-[20px] xmd:flex-col xmd:w-full">
          <input type="text" className="bg-[#F4F6F9] h-12 w-[300px] pl-[20px] xmd:text-[17px] rounded-[10px] xmd:w-full" placeholder="Email Address" />
          <button className="bg-hover w-[150px] h-[50px] rounded-[10px] text-white xmd:h-[40px]">Subcribe</button>
         </div>
        </div>
    
    </div>
  )
}

export default CalltoHelp