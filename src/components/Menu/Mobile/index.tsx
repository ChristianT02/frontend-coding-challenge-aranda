import "./index.scss";

import TextSecondary from "../../Text/Secondary";
import menu from "../menu";
import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <ul className="menuMobile">
      {menu.map((item, index) => (
        <NavLink
          key={index}
          to={item.route}
          className={({ isActive }) => (isActive ? "selected" : undefined)}
        >
          <li>
            {item.icon}
            <TextSecondary color="primary">{item.label}</TextSecondary>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

export default Mobile;
