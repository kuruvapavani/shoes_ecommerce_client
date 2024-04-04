
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './pages/components/Layout.jsx';
import Home from './pages/Home.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import UserProvider from './pages/context/userContext.js';
import ErrorPage from "./pages/ErrorPage.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Contact from './pages/Contact.jsx';
import Products from "./pages/Products.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import Logout from "./pages/Logout.jsx"
import UserProfile from './pages/UserProfile.jsx';
import MyCart from './pages/MyCart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout /></UserProvider>,
    errorElement:<ErrorPage />,
    children: [
      {
        index : true,
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login />
      },{
        path:"/register",
        element:<Register />
      },{
        path:"/logout",
        element:<Logout />
      },{
        path:"/products",
        element:<Products />
      },{
        path:"/product/:id",
        element:<SingleProduct />
      },{
        path:"/profile",
        element:<UserProfile />
      },{
        path:"/cart",
        element:<MyCart />
      }
    ]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);