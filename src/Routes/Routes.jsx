import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Home/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/LoginSignup/Login";
import SignUp from "../Pages/LoginSignup/SignUp";
import Secret from "../Pages/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path :"/",
        element:<Home></Home>
      },
      {
        path :"/menu",
        element:<Menu></Menu>
      },
      {
        path :"/login",
        element:<Login></Login>
      },
      {
        path :"/signup",
        element:<SignUp></SignUp>
      },
      {
        path :"/topsecret",
        element: <PrivateRoute>
          <Secret></Secret>
        </PrivateRoute>
      },
      // {
      //   path :"/order",
      //   element:<Order></Order>
      // },
      {
        path :"/order/:category",
        element:<Order></Order>
      }



      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        },
        //admin routes
        {
          path:'users',
          element:<AllUsers></AllUsers>
        },
      ]
    }
  ]);