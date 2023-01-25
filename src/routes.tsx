import { createBrowserRouter } from "react-router-dom";
import Cake from "./pages/Cake";
import Home from "./pages/Home";
import FastFood from "./pages/FastFood";
import PlateMain from "./pages/PlateMain";
import Soup from "./pages/Soup";
import Vegetarian from "./pages/Vegetarian";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cake",
    element: <Cake />,
  },
  {
    path: "/fastFood",
    element: <FastFood />,
  },
  {
    path: "/plateMain",
    element: <PlateMain />,
  },
  {
    path: "/soup",
    element: <Soup />,
  },
  {
    path: "/vegetarian",
    element: <Vegetarian />,
  },
]);
