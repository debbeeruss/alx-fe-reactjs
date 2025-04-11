import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json'; // Make sure this file exists and is at root level inside src

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Convert id to integer and find the matching recipe
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10 text-gray-600">
        <p>Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full rounded-xl shadow mb-6"
        />
      )}

      <p className="text-gray-700 mb-4">{recipe.description}</p>

      {recipe.ingredients && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg">
            {recipe.ingredients.map((item, index) => (
              <li key={index} className="text-gray-800">{item}</li>
            ))}
          </ul>
        </section>
      )}

      {recipe.instructions && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside bg-gray-50 p-4 rounded-lg">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-800 mb-2">{step}</li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
};

export default RecipeDetail;
