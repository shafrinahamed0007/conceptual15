import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import Apps from "./pages/apps/Apps.jsx";
import InstallApps from "./pages/installApps/InstallApps.jsx";
import NotFound from "./pages/NotFoundPage/NotFound.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installApps",
        element: <InstallApps />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
);
