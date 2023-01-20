import MenuDesk from "../../Menu/Desk";
import TextPrimary from "../../Text/Primary";
import TextSecondary from "../../Text/Secondary";
import "./index.scss";

const HeaderDesk = () => {
  return (
    <header className="header">
      <div className="title">
        <TextPrimary>Recipe</TextPrimary>
        <TextSecondary>App</TextSecondary>
      </div>
      <div className="menuHead">
        <MenuDesk />
      </div>
    </header>
  );
};

export default HeaderDesk;
