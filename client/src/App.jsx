import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Dashboard from "./components/admin/Dashboard";
import DashboardAdmin from "./components/Added/DashboardAdmin";
import About from "./pages/About";
import Creator from "./pages/creator";
import Help from "./pages/help";
import Schedule from "./pages/Schedule";

const Layout = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/creator",
        element: <Creator />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/add",
        element: <DashboardAdmin />,
      },
      {
        path: "/schedule/:slugWEEK/:slugDMY",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
