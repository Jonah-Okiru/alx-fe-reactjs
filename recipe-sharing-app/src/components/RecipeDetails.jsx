import useRecipeStore from './recipeStore';
import {useParams} from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipetDetails = ()=>{
    const {receipID} = useParams();
    const recipe = useRecipeStore((state)=>
        state.recipes.find((recipe)=>recipe.id===parseInt(receipID))
    );
    if(!recipe){
        return <p>No Recipe added</p>
    }
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={receipID} />
            <DeleteRecipeButton recipe={recipe.id} />
        </div>
    );
};
export default RecipetDetails;