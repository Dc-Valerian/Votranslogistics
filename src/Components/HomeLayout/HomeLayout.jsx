import { Outlet } from "react-router-dom"
import Footer from "../Bloc/Footer"
import Header from "../Bloc/Header"

const HomeLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout