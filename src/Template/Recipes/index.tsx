import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import Recipes from "../../components/Recipes";
import { change } from "../../redux/slices/recipes";

const TemplateRecipes = ({ tag }: any) => {
  const dispatch = useDispatch();

  const getData = useCallback(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=6&apiKey=0321a7b58720416da1a8b9101d3b1f56&tags=${tag}`
    )
      .then((response) => response.json())
      .then((doc) => {
        dispatch(change({ data: doc.recipes, tag }));
      });
  }, [dispatch, tag]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout>
      <Recipes />
    </Layout>
  );
};

export default TemplateRecipes;
