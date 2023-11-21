import React from "react";
import {
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutPage/About";
import Contact from "./Components/ContactPage/Contact";
import Dashboard from "./Components/DashboardPage/Dashboard";
import Login from "./Components/AuthLayout/login";
import Register from "./Components/AuthLayout/Register";
import CreateJournal from "./Components/CreateJournalPage/CreateJournal";
import { useAppStore } from "./appStore";
import { useUserStore } from "./userStore";

const App: React.FC = () => {
  const Layout = () => {
    const { language } = useAppStore();
    return (
      <div>
        <Navbar />
        <div
          className={`app-container  ${language === "Farsi" ? "rtl" : "ltr"}`}
        >
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }: any) => {
    const { user } = useUserStore();
    if (!user) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/dashboard/:id",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/:id/createjournal/:id",
          element: <CreateJournal />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
