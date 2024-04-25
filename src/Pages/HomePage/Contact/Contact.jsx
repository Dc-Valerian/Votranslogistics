
import { Fade } from "react-awesome-reveal";
import Button from "../../../Components/ButtonProps/Button";

const Contact = () => {
  return (
    <div className="h-[600px] flex items-center justify-center xmd:h-[450px]">
        <div className="bg-mapimage w-[80%] bg-no-repeat bg-center bg-cover h-[80%] flex items-center justify-center flex-col rounded-[50px] xmd:w-[90%]  shadow-2xl xmd:gap-[10px]">
            <h2 className="text-[18px] text-[#313a5b] font-[600]">Lets Work Together</h2>
            <p className="w-[80%] text-center text-[55px] font-[700] text-[#313a5b] leading-[60px] xmd:text-[30px] xmd:leading-[40px]">
            Need a Freight Partner? Let us take care of your next project!
            </p>
            <Fade direction="up">
                  <Button width="192px" text="Get Started" backgroundColor="#FF641D"/>
                </Fade>
        </div>
    </div>
  )
}

export default Contact