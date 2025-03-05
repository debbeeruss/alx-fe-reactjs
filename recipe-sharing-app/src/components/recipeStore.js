import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    // Example Recipe (In a real app, data might come from an API or database)
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A flavorful chicken curry with spices.' },
  ],
  
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { ...newRecipe, id: state.recipes.length + 1 }]
  })),

  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
}));

export { useRecipeStore };




