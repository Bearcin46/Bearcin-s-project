import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Html from "./components/Html.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bootstrap from "./components/Bootstrap.jsx";
import Tailwind from "./components/tailwind.jsx";
import Javascript from "./components/Javascript.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Homepage from "./components/Homepage.jsx";
import Reactpage from "./components/React.jsx";
import Blog from "./components/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/html",
        element: <Html />,
      },
      {
        path: "/bootstrap",
        element: <Bootstrap />,
      },
      {
        path: "/tailwind",
        element: <Tailwind />,
      },
      {
        path: "/js",
        element: <Javascript />,
      },
      {
        path: "/rjs",
        element: <Reactpage />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
