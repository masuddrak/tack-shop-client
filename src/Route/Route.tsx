import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../components/home/HomePage";
import ShopPage from "../components/shop/ShopPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/shop",
            element:<ShopPage></ShopPage>
        },
      ] 
    },

  ]);