import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Components/HomeLayout/HomeLayout";
import HomeScreen from "../Pages/HomePage/HomeScreen/HomeScreen";


export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            },
        ]
    },

])

