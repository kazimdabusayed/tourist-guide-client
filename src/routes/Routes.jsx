import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";


export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      children: [
         {
            path: "/",
            element: <Home/>
         },
      ]
   },
   {
      path: "/signup",
      element: <Register />
   },
   {
      path: "/signin",
      element: <Login />
   },
])