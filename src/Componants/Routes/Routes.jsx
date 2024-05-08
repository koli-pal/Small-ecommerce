import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Prooducts/Products";
import SingleProduct from "../../Pages/Single-Product/SingleProduct";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import Dashboard from "../../Pages/Customer/Dashboard/Dashboard";
import Profile from "../../Pages/Customer/Profile/Profile";
import Order from "../../Pages/Customer/Order/Order";
import AdminDashboard from "../../Pages/Admin/AdminDashboard/AdminDashboard";
import Inventory from "../../Pages/Admin/Inventory/Inventory";
import ProductIUpload from "../../Pages/Admin/ProductUpload/ProductIUpload";
import AllOrder from "../../Pages/Admin/AllOrders/AllOrder";
import AllUsers from "../../Pages/Admin/AllUsers/AllUsers";
import MyProfile from "../../Pages/Admin/MyProfile/MyProfile";
import MyAdmin from "../../Pages/Admin/MyAdmin/MyAdmin";

import { Register } from "../../Pages/Register/Register";

import { LoginCard } from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'products',
            element: <Products/>
        },
        {
            path: 'products/:id',
            element: <SingleProduct/>
        },
        {
            path: 'cart',
            element: <Cart/>
        },
        {
            path:'checkout',
            element: <Checkout/>
        }
      ]
    },
    {
        path: '/dashboard',
        index: <Dashboard/>,
        children :[
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'orders',
                element: <Order/>
            }
        ]
    },
    {
        path: '/dashboard/admin',
        element: <MyAdmin/>,
        children:
        [
            {
                path: '/dashboard/admin',
                element: <AdminDashboard/>
            },
            {
                path: 'inventory',
                element: <Inventory/>
            },
            {
                path: 'product-upload',
                element: <ProductIUpload/>
            },
            {
                path: 'all-orders',
                element: <AllOrder/>
            },
            {
                path: 'all-users',
                element: <AllUsers/>
            },
            {
                path: 'profile',
                element: <MyProfile/>
            }
        ]
    },
    {
        path:'/login',
        element:<LoginCard/>
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }

  ]);


export default router;
