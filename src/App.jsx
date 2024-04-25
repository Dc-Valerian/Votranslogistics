import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./Router/Router";


function App() {
  return (
    <div>
     <RouterProvider router={mainRoute}/>
    </div>
  );
}

export default App;
