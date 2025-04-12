import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (!filteredRecipes.length) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="mb-4 p-4 border rounded shadow-sm">
          <Link to={`/recipe/${recipe.id}`}>
            <h3 className="text-lg font-semibold text-purple-700 hover:underline">
              {recipe.title}
            </h3>
          </Link>
          <p>{recipe.description.slice(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
