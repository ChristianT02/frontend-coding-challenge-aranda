import "./index.scss";
import { ReactComponent as Vegetarian } from "../../../assets/icons/ic_vegetarian.svg";
import { ReactComponent as Main } from "../../../assets/icons/ic_main.svg";
import { ReactComponent as Cake } from "../../../assets/icons/ic_cake.svg";
import { ReactComponent as FastFood } from "../../../assets/icons/ic_fast-food.svg";
import { ReactComponent as Kids } from "../../../assets/icons/ic_kids.svg";
import { ReactComponent as Soup } from "../../../assets/icons/ic_soup.svg";
import TextSecondary from "../../Text/Secondary";

const Mobile = () => {
  return (
    <ul className="menuMobile">
      <li>
        <Vegetarian />

        <TextSecondary>Vegetarianos</TextSecondary>
      </li>
      <li>
        <Main />

        <TextSecondary>Principales</TextSecondary>
      </li>
      <li>
        <Cake />

        <TextSecondary>Tortas</TextSecondary>
      </li>
      <li>
        <FastFood />

        <TextSecondary>R&aacute;pida</TextSecondary>
      </li>
      <li>
        <Kids />

        <TextSecondary>Men&uacute; Ni&ntilde;os</TextSecondary>
      </li>
      <li>
        <Soup />

        <TextSecondary>Sopas</TextSecondary>
      </li>
    </ul>
  );
};

export default Mobile;
