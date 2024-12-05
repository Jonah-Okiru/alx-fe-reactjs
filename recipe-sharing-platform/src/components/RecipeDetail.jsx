import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
function RecipeDetail(){
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() =>{
        // load data from the data.json file
        const fetchRecipe = async () =>{
            try{
                const response = await fetch('/data.json');
                const data = await response.json();
                const foundRecipe = data.recipes.find((recipe) => recipe.id === parseInt(recipeId, 10));
                if (foundRecipe) {
                    setRecipe(fetchRecipe);
                } else {
                    setError ('Recipe not found');
                }
            } catch (err) {
                setError('Fail to fetch recipes');
            }
            
        };
        fetchRecipe();

    }, [recipeId]);
    if (error){
        return <p>{error}</p>;
    }
    if (!recipe){
        return <p>Loading...</p>
    }
    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
        </div>
    );
};
export default RecipeDetail;