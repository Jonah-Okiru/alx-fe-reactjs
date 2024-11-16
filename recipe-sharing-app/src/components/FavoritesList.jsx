import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default FavoritesList;
