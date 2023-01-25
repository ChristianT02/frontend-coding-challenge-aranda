import MenuDesk from "../../Menu/Desk";
import TextPrimary from "../../Text/Primary";
import TextSecondary from "../../Text/Secondary";
import "./index.scss";
import { ReactComponent as Home } from "../../../assets/icons/ic_home.svg";
const HeaderDesk = () => {
  return (
    <header className="header">
      <div className="title">
        <TextPrimary color="primary" size={40} lineHeight={48}>
          Recipe
        </TextPrimary>
        <TextSecondary color="secondary" size={30} lineHeight={46}>
          App
        </TextSecondary>
      </div>
      <div className="menuHead">
        <MenuDesk />
      </div>
      <div className="menuMobileIcon">
        <Home />
      </div>
    </header>
  );
};

export default HeaderDesk;
