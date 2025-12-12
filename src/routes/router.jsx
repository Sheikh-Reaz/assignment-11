import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllProducts from "../pages/AllProducts/AllProducts";
import Contact from "../pages/Contact/Contact";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import MyOrders from "../pages/Dashboard/Buyer/MyOrders/MyOrders";
import TrackOrder from "../pages/Dashboard/Buyer/TrackOrder/TrackOrder";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import BuyerRoutes from "./BuyerRoutes";
import ManagerRoutes from "./ManagerRoutes";
import AddProduct from "../pages/Dashboard/Manager/AddProduct/AddProduct";
import ManageProduct from "../pages/Dashboard/Manager/ManageProduct/ManageProduct";
import PendingOrders from "../pages/Dashboard/Manager/PendingOrders/PendingOrders";
import ApproveOrders from "../pages/Dashboard/Manager/ApproveOrders/ApproveOrders";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AllOrders from "../pages/Dashboard/Admin/AllOrders/AllOrders";
import UpdateProduct from "../pages/Dashboard/Manager/UpdateProduct/UpdateProduct";

export const router = createBrowserRouter([
  //Main routes
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true,
        Component: Home
      },
      {
        path: "about-us",
        Component: AboutUs
      },
      {
        path: "all-products",
        element: <PrivateRoutes><AllProducts/></PrivateRoutes>
      },
      {
        path:"contact",
        Component: Contact
      }

    ],
  },
  //Auth routes
 {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  //Dashboard routes
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      //buyer routes
      {
        path: "my-orders",
       element: <BuyerRoutes> <MyOrders/></BuyerRoutes>
      },
      {
        path: "track-orders/:id",
        element: <BuyerRoutes><TrackOrder/></BuyerRoutes>
      },
      {
        path: "profile",
        Component: MyProfile
      },
      //Manager Routes
      {
        path: "add-products",
        element: <ManagerRoutes> <AddProduct/> </ManagerRoutes>
      },
      {
        path: "manage-products",
        element: <ManagerRoutes> <ManageProduct/> </ManagerRoutes>
      },
      {
        path: "update-product/:productId",
        element: <ManagerRoutes> <UpdateProduct/> </ManagerRoutes>
      },
      {
        path:"pending-orders",
        element:<ManagerRoutes> <PendingOrders/> </ManagerRoutes>
      },
      {
        path:"approve-orders",
        element:<ManagerRoutes> <ApproveOrders/> </ManagerRoutes>
      },
      //Admin Routes
      {
          path: "manage-users",
          element: <AdminRoutes> <ManageUsers/> </AdminRoutes>
      },
      {
        path: "all-products",
        element: <AdminRoutes> <AllProducts/> </AdminRoutes>
      },
      {
        path: "all-orders",
        element: <AdminRoutes> <AllOrders/> </AdminRoutes>
      }

    ]
  }

]);


//Manage Users
// All Products
// All Orders
