import { createBrowserRouter } from "react-router";
import Apps from "../pages/apps/Apps";
import Homepage from "../pages/homepage/Homepage";
import InstallApps from "../pages/installApps/InstallApps";
import RootLayout from "../layout/RootLayout.jsx";
import NotFound from "../pages/NotFoundPage/NotFound.jsx"
import AppDetails from "../pages/appDetails/AppDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Homepage />,
        loader: ()=>fetch("/data.json")
      },
      {
        path: "/apps",
        element: <Apps />,
        
      },
      {
        path: "/installApps",
        element: <InstallApps />,
      },
      {
        path: "/apps/:id",
        element: <AppDetails />
      }
    ],
    errorElement: <NotFound />,
  },
]);