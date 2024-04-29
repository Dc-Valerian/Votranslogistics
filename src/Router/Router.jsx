import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import HomeScreen from "../Pages/HomePage/HomeScreen/HomeScreen";
import AboutHomeScreen from "../Pages/AboutPage/AboutHomeScrren/AboutHomeScreen";


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            },
            {
                path:'/about-us',
                element:<AboutHomeScreen/>
            }
        ]
    },

])

