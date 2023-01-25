import { useSelector } from "react-redux";
import Recipe from "../Recipe";
import TextPrimary from "../Text/Primary";
import "./index.scss";

const Recipes = () => {
  const recipes = useSelector((state: any) => state.recipes);

  return (
    <section className="recipes">
      <div className="recipes_title">
        <TextPrimary color="secondary" size={68} lineHeight={80}>
          Nuevas Recetas
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
