import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Recipe from "../Recipe";
import TextPrimary from "../Text/Primary";
import "./index.scss";
import menu from "../Menu/menu";
import { useMemo } from "react";

const Recipes = () => {
  const recipes = useSelector((state: any) => state.recipes);
  const location = useLocation();

  const title = useMemo(() => {
    const currentRoute = menu.find((item) => item.route === location.pathname);

    const obj: any = {
      "/": "News Recipes",
    };
    let label;
    if (currentRoute?.route && obj[currentRoute?.route]) {
      label = obj[currentRoute?.route];
    } else {
      label = `Recipes ${currentRoute?.label}`;
    }

    return label;
  }, [location]);

  return (
    <section className="recipes">
      <div className="recipes_title">
        <TextPrimary color="secondary" size={68} lineHeight={80}>
          {title}
        </TextPrimary>
      </div>

      <ul className="scrolling-wrapper">
        {recipes.data.map((recipe: any) => (
          <li key={recipe.id} className="card">
            <Recipe item={recipe} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recipes;
