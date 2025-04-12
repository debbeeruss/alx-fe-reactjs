import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">My Favorites</h2>
      {favorites.length ? (
        favorites.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded mb-2">
            <h3 className="text-lg font-medium">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
