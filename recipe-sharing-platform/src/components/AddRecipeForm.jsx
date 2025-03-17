import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled out
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    // Validation: Ensure at least two ingredients are provided
    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // Create new recipe object (mock submission)
    const newRecipe = {
      id: Date.now(), // Temporary unique ID
      title,
      ingredients: ingredientList,
      instructions,
    };

    console.log("Submitted Recipe:", newRecipe);

    // Reset form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
        Add a New Recipe
      </h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (comma separated):
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="E.g., Tomato, Cheese, Basil"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps:
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the steps..."
            rows="4"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
