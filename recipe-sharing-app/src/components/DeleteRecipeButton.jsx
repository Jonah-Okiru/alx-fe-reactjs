import useRecipeStore from "./recipeStore";
const DeleteRecipeButton = ({recipeID})=> {
    const deleteRecipe = ((state)=>state.deleteRecipe);
    return (
        <button onClick={()=>deleteRecipe(recipeID)}>Delete Recipe</button>
    );
};
export default DeleteRecipeButton;