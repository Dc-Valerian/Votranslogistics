import  {useState} from 'react'
import {BiMenu} from "react-icons/bi"
import {   BsFillDiscFill} from "react-icons/bs"


const Header = () => {

  const [show, setShow] = useState(false)

  

  const Toggle = () => {
      setShow(!show)
    }


  return (
    <div className='w-full h-20 z-10  flex justify-center absolute xmd:fixed xmd:bg-[#5D7AD7]' id='her'>
      <div className='w-11/12 flex items-center justify-between'>
        <img src="https://res.cloudinary.com/dbpcptmco/image/upload/v1713141174/Votrans-Logo-1_007c003b1_3304-removebg-preview_1_yqrd3w.png" alt="" className='h-16'/>

        <div className='flex items-center xmd:hidden justify-between w-[500px]'>
          <a href="">
          <div className='text-white text-lg  hover:text-hover cursor-pointer '>Home</div>
          </a>

          <a href="">
          <div className='text-white text-lg hover:text-hover cursor-pointer'>About Us</div>
          </a>

          <a href="">
          <div className='text-white text-lg hover:text-hover cursor-pointer'>Export Services</div>
          </a>

          <a href="">
          <div className='text-white text-lg hover:text-hover cursor-pointer'>Contact Us</div>
          </a>
        </div>

   

     {
      show ? (
        <div className='hidden  items-center text-white text-4xl md:flex cursor-pointer' onClick={Toggle}>
        <BsFillDiscFill/>
      </div>
      ) : (
        <div className='hidden items-center text-white text-4xl md:flex cursor-pointer' onClick={Toggle}>
          <BiMenu />
      </div>
      )
     }
      </div>
      
      {show ? (
         <div className='hidden md:flex h-screen w-44 bg-[white] top-20 right-0 fixed flex-col items-center'>
           <div className=' flex gap-[20px] flex-col'>
          <a href="">
          <div className='text-[black] text-lg  hover:text-hover cursor-pointer '>Home</div>
          </a>

          <a href="">
          <div className='text-[black] text-lg hover:text-hover cursor-pointer'>About Us</div>
          </a>

          <a href="">
          <div className='text-[black] text-lg hover:text-hover cursor-pointer'>Export Services</div>
          </a>

          <a href="">
          <div className='text-[black] text-lg hover:text-hover cursor-pointer'>Contact Us</div>
          </a>
        </div>
       
        </div>
      ) : null}

    </div>
  )
}

export default Header

