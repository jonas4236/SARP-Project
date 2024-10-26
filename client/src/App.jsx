import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import Dashboard from "./components/admin/Dashboard";
import DashboardAdmin from "./components/Added/DashboardAdmin";
import DashboardStaff from "./components/Added/DashboardStaff";
import About from "./pages/About";
import Creator from "./pages/creator";
import Help from "./pages/help";
import Schedule from "./pages/Schedule";
import HelpSuccess from "./pages/help-success";
import MimiFooter from "./pages/mimiFooter";
import ChartStudent from "./pages/ChartStudent";

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
        path: "/sitemap",
        element: <MimiFooter />,
      },
      {
        path: "/add",
        element: <DashboardAdmin />,
      },
      {
        path: "/staff/add",
        element: <DashboardStaff />,
      },
      {
        path: "/schedule/:slugWEEK/:slugDMY",
        element: <Dashboard />,
      },
      {
        path: "/students/data",
        element: <ChartStudent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/help/successfully",
    element: <HelpSuccess />,
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
