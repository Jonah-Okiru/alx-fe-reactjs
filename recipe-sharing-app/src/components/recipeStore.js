import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // State
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recomendations: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addFavorites: (recipeID) => set(state =>({favorites: state.favorites.includes(recipeID)
    ? state.favorites: [...state.favorites],
    })),
  removeFavorite: (recipeID) => set(state =>({favorites: state.favorites.filter((id) => id !== recipeID),
    
  })),
  generateRecommendations: () =>
    set((state) => {
      // Mock recommendation logic based on common ingredients or random pick
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          state.favorites.some((favId) =>
            recipe.ingredients.some((ing) =>
              state.recipes
                .find((favRecipe) => favRecipe.id === favId)
                ?.ingredients.includes(ing)
            )
          )
      );
      return { recommendations: recommended };
    }),
}));


export default useRecipeStore;
