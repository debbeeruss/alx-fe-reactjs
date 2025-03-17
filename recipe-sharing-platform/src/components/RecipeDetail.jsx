import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from the data.json
    const selectedRecipe = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-red-500 text-lg">Recipe not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />

      <h2 className="text-xl font-semibold text-gray-800 mt-4">Ingredients:</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-4">Instructions:</h2>
      <p className="text-gray-700 mt-2">{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
