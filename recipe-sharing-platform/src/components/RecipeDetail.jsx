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
                    setRecipe(foundRecipe);
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
        <div className='bg-green-300 content-center hover:shadow-lg'>
            <h1 className='text-black font-bold'>{recipe.name}</h1>
            <img src={recipe.image} className='rounded-full mx-auto' alt={recipe.name} />
            <h2 className='text-black font-semibold'>Ingredients</h2>
            <ul className='text-black font-semibold'>
                {recipe.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <h2 className='text-black font-semibold'>Instructions</h2>
            <p className='text-black font-semibold'>{recipe.instructions}</p>
        </div>
    );
};
export default RecipeDetail;