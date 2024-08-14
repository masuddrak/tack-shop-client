import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../components/home/HomePage";
import ShopPage from "../components/shop/ShopPage";
import SignUp from "../components/common/allForms/SignUp";


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
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
      ] 
    },

  ]);