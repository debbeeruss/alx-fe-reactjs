import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipesData from "../data.json"; // Assuming you store recipes in src/data.json

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = recipesData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500 mt-10">Recipe not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />

      <h2 className="text-xl font-semibold text-gray-800 mt-4">Ingredients</h2>
      <ul className="list-disc list-inside text-gray-600">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">Preparation Steps</h2>
      <p className="text-gray-600 leading-relaxed">{recipe.steps}</p>
    </div>
  );
}

export default RecipeDetail;
