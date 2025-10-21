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
import Details from "./pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/trending.json").then((res) => res.json()),
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
        loader: () => fetch("/allApp.json").then((res) => res.json()),
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/Details/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch(`/allApp.json`);
          const data = await res.json();
          return data.find((app) => app.id === parseInt(params.id));
        },
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
