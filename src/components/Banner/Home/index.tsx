import ImageHead from "../../Image/Head";
import TextPrimary from "../../Text/Primary";
import TextSecondary from "../../Text/Secondary";
import "./index.scss";

const BannerHome = () => {
  return (
    <section className="section">
      <ImageHead />
      <div className="floatText">
        <TextSecondary>Recetas</TextSecondary>
        <TextPrimary>para todos</TextPrimary>
      </div>
    </section>
  );
};

export default BannerHome;
