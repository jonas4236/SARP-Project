import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import Admin from "./components/admin/Dashboard";
import Login from "./components/Login";
import Dashboard from "./components/admin/Dashboard";
import DashboardAdmin from "./components/Added/DashboardAdmin";
import { AuthContext } from "./auth/AuthContext";

const Layout = () => {
  const PrivateRoute = ({ path, element }) => {
    const { currentUser } = useContext(AuthContext);

    return currentUser ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" />
    );
  };
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
