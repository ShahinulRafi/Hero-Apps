import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { RouterContextProvider } from "react-router";
import Home from "./pages/Home.jsx";
import Apps from "./pages/Apps.jsx";
import Installation from "./pages/Installation.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/public/trending.json").then((res) => res.json())
      },
      {
        path: "Apps",
        element: <Apps></Apps>,
      },
      {
        path: "installation",
        element: <Installation></Installation>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
