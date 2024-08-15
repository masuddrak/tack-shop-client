import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../components/home/HomePage";
import ShopPage from "../components/shop/ShopPage";
import SignUp from "../components/common/allForms/SignUp";
import Login from "../components/common/allForms/Login";
import AddProduct from "../components/addProduct/AddProduct";


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
            path:"/add-product",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
      ] 
    },

  ]);