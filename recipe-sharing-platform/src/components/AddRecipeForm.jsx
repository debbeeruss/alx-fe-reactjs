import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // State to track validation errors

  // Validation function
  const validate = () => {
    const errors = {};

    // Check if fields are empty
    if (!title) errors.title = 'Title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!steps) errors.steps = 'Steps are required';

    // Check if ingredients have at least 2 items
    const ingredientsArray = ingredients.split('\n').map((ingredient) => ingredient.trim());
    if (ingredientsArray.length < 2) {
      errors.ingredients = 'Please provide at least two ingredients';
    }

    // Check if steps have at least 1 step
    const stepsArray = steps.split('\n').map((step) => step.trim());
    if (stepsArray.length < 1) {
      errors.steps = 'Please provide at least one step';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Run validation
    const validationErrors = validate();
    setErrors(validationErrors);

    // If there are validation errors, stop the form submission
    if (Object.keys(validationErrors).length > 0) return;

    const ingredientsArray = ingredients.split('\n').map((ingredient) => ingredient.trim());
    const stepsArray = steps.split('\n').map((step) => step.trim());

    // Add the new recipe
    addRecipe({
      id: Date.now(),
      title,
      ingredients: ingredientsArray,
      steps: stepsArray,
    });

    // Clear the form fields
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4 rounded-md shadow-md max-w-lg mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>

      {/* Error messages */}
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 text-center mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (each on a new line)"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}

      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Steps (each step on a new line)"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="4"
      />
      {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

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
