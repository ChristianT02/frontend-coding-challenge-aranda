import "./index.scss";
import { NavLink } from "react-router-dom";
import menu from "../menu";
const MenuDesk = () => {
  return (
    <ul className="menuDesk">
      {menu.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.route}
            className={({ isActive }) => (isActive ? "selected" : undefined)}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuDesk;
