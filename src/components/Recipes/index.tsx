import { useSelector } from "react-redux";
import Recipe from "../Recipe";
import TextPrimary from "../Text/Primary";
import "./index.scss";

const Recipes = () => {
  const recipes = useSelector((state: any) => state.recipes);

  return (
    <section className="recipes">
      <TextPrimary color="secondary" size={68} lineHeight={80}>
        Nuevas Recetas
      </TextPrimary>
      <ul className="list">
        {recipes.data.map((recipe: any) => (
          <Recipe key={recipe.id} item={recipe} />
        ))}
      </ul>
    </section>
  );
};

export default Recipes;
