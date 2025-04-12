import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-4 border rounded shadow-sm">
          <h3 className="text-lg font-semibold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
