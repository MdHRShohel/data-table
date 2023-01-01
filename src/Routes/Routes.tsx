import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AyakubInfo from "../Pages/AyakubInfo";
import BikashInfo from "../Pages/BikashInfo";
import Home from "../Pages/Home/Home";
import HossainInfo from "../Pages/HossainInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikash",
        element: <BikashInfo />,
      },
      {
        path: "/ayakub",
        element: <AyakubInfo />,
      },
      {
        path: "/hossain",
        element: <HossainInfo />,
      },
    ],
  },
]);
