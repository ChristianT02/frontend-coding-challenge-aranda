import ImageHead from "../../Image/Head";
import TextPrimary from "../../Text/Primary";
import TextSecondary from "../../Text/Secondary";
import "./index.scss";

const BannerHome = () => {
  return (
    <section className="banner">
      <ImageHead />
      <div className="floatText">
        <TextSecondary color="white">Recetas</TextSecondary>
        <TextPrimary color="white">para todos</TextPrimary>
      </div>
    </section>
  );
};

export default BannerHome;
