import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Front-end validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }

    const ingredientsArray = ingredients.split('\n').map((ingredient) => ingredient.trim());
    if (ingredientsArray.length < 2) {
      setError('Please provide at least two ingredients');
      return;
    }

    addRecipe({
      id: Date.now(),
      title,
      ingredients: ingredientsArray,
      instructions: instructions.split('\n').map((step) => step.trim()),
    });

    // Reset form fields and error message
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4 rounded-md shadow-md max-w-lg mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (each on a new line)"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />

      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions (each step on a new line)"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
