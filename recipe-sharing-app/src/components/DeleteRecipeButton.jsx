import useRecipeStore from "./recipeStore";
import { useNavigate } from 'react-router-dom'
const DeleteRecipeButton = ({recipeID})=> {
    const deleteRecipe = ((state)=>state.deleteRecipe);
    const navigate = useNavigate();
    const handleDelete = ()=>{
        deleteRecipe(recipeID);
        navigate('/');
    }
    return (
        <button onClick={handleDelete}>Delete Recipe</button>
    );
};
export default DeleteRecipeButton;