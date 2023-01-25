import { ReactComponent as Vegetarian } from "../../assets/icons/ic_vegetarian.svg";
import { ReactComponent as Main } from "../../assets/icons/ic_main.svg";
import { ReactComponent as Cake } from "../../assets/icons/ic_cake.svg";
import { ReactComponent as FastFood } from "../../assets/icons/ic_fast-food.svg";
import { ReactComponent as Soup } from "../../assets/icons/ic_soup.svg";

export default [
  { label: "Home", route: "/", icon: <Main /> },
  { label: "Vegetarian", route: "/vegetarian", icon: <Vegetarian /> },
  { label: "Principales", route: "/plateMain", icon: <Main /> },
  { label: "Cake", route: "/cake", icon: <Cake /> },
  { label: "Fast Food", route: "/fastFood", icon: <FastFood /> },
  { label: "Soup", route: "/soup", icon: <Soup /> },
];
