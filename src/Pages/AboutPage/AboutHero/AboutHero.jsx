import { FaArrowRight } from "react-icons/fa6";


const AboutHero = () => {
  return (
      <div className="bg-aboutImage bg-no-repeat  bg-cover h-[300px] flex items-center justify-center w-full">
      <div className="w-full bg-[#262f37] bg-opacity-50 flex-col items-center flex h-full justify-center">

     <div className="z-999">
    <div className="flex items-center justify-center gap-[10px]">
      <h3 className="text-[#ff5e14] text-[19px] font-[600] cursor-pointer">Home</h3>
      <FaArrowRight className="text-[white] text-[19px] font-[600]"/>
      <h3 className="text-[19px] font-[600] text-[white]">
        About
      </h3>
    </div>
     </div>
      </div>
  </div>
  )
}

export default AboutHero