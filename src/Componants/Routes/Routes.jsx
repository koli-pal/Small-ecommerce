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
import AllOrder from "../../Pages/Admin/AllOrders/AllOrders";
import AllUsers from "../../Pages/Admin/AllUsers/AllUsers";
import MyProfile from "../../Pages/Admin/MyProfile/MyProfile";
import MyAdmin from "../../Pages/Admin/MyAdmin/MyAdmin";

import { Register } from "../../Pages/Register/Register";

import { LoginCard } from "../../Pages/Login/Login";
import RequireAuth from "../RequiredAuth/RequireAuth";

import Category from "../../Category/Category";
import RequiredAdmin from "../RequiredAdmin/RequiredAdmin";
//import ProductUpload from "../../Pages/Admin/ProductUpload/ProductIUpload";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: (
          <RequireAuth>
            <SingleProduct />
          </RequireAuth>
        ),
      },
      {
        path:"category/:category",
        element:<Category/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        path: "orders",
        element: (
          <RequireAuth>
            <Order />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <MyAdmin />,
    children: [
      {
        path: "/dashboard/admin",
        element: (
          <RequiredAdmin>
            <AdminDashboard />
          </RequiredAdmin>
        ),
      },
      {
        path: "inventory",
        element: (
          <RequiredAdmin>
            <Inventory />
          </RequiredAdmin>
        ),
      },
      {
        path: "product-upload",
        element: (
          <RequiredAdmin>
            <ProductIUpload />
          </RequiredAdmin>
        ),
      },
      {
        path: "all-orders",
        element: (
          <RequiredAdmin>
            <AllOrder />
          </RequiredAdmin>
        ),
      },
      {
        path: "all-users",
        element: (
          <RequiredAdmin>
            <AllUsers />
          </RequiredAdmin>
        ),
      },
      {
        path: "profile",
        element: (
          <RequiredAdmin>
            <MyProfile />
          </RequiredAdmin>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
