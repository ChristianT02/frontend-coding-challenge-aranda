import TextPrimary from "../Text/Primary";
import TextSecondary from "../Text/Secondary";
import { ReactComponent as Star } from "./../../assets/icons/ic_star.svg";
import { ReactComponent as Heart } from "../../assets/icons/ic-favorite.svg";

import { ReactComponent as Portion } from "../../assets/icons/ic_portion.svg";
import { ReactComponent as Time } from "../../assets/icons/ic_time.svg";
import { ReactComponent as Chef } from "../../assets/icons/ic_chef.svg";

import "./index.scss";

const Recipe = ({ item }: any) => {
  const names = item?.title.split(" ");
  const title1 = names[0];
  const title2 = names[1];

  return (
    <div className="recipe">
      <div
        className="plate"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="title">
        <TextSecondary color="secondary" size={28} lineHeight={36}>
          {title1}
        </TextSecondary>
        {title2 && (
          <TextPrimary color="secondary" size={28} lineHeight={36}>
            {title2}
          </TextPrimary>
        )}
      </div>
      <div className="score">
        <div>
          <Star className="star" />
          <TextSecondary color="primary" size={26} lineHeight={39}>
            5.0
          </TextSecondary>
        </div>
        <Heart className="heart" />
      </div>

      <div className="detail">
        <div>
          <Portion />
          <TextPrimary color="secondary" size={17} lineHeight={20}>
            Tama&ntilde;o de la porci&oacute;n
          </TextPrimary>
          <TextSecondary color="primary" size={17} lineHeight={20}>
            4 raciones
          </TextSecondary>
        </div>
        <div>
          <Time />
          <TextPrimary color="secondary" size={17} lineHeight={20}>
            Tiempo de preparaci&oacute;n
          </TextPrimary>
          <TextSecondary color="primary" size={17} lineHeight={20}>
            10 minutos
          </TextSecondary>
        </div>
        <div>
          <Chef />
          <TextPrimary color="secondary" size={17} lineHeight={20}>
            Dificultad
          </TextPrimary>
          <TextSecondary color="primary" size={17} lineHeight={20}>
            f&aacute;cil
          </TextSecondary>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
