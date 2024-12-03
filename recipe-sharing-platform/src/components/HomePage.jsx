import React, { useState, useEffect } from "react";
function HomePage (){
    // set the initial state of the data
    const [recipes, setRecipes] = useState([]);
    // Fetching the data from json file and updating the state of the data from an empty array to annray containg the data
    useEffect(()=>{
        fetch('/data.json').then((respose) =>{
            if (!respose.ok){
                throw new Error('Failed to fetch recipes');
                
            }
            return respose.json();
        })
        .then((data) =>{
            setRecipes(data);
        })
        .catch((error) =>{
            console.error("Error fetching the recipe data", error);
        })
        
        
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <h1 className="text-blue-700 text-center font-bold pb-3">Recipe list</h1>
            {
                recipes.map((recipe)=> (
                    <div key={recipe.id} className="bg-pink-200 pt-3  hover:shadow-md">
                        <img src={recipe.image} className="mx-auto rounded-full h-40 w-40 sm:h-24 sm:w-24 md:h-50 md:w-50 hover:scale-110 transition-transform ease-in-out" alt="Image"/>
                        <p className="text-black font-bold decoration-2">{recipe.title}</p>
                        <p className="pb-3 font-semibold">{recipe.summary}</p>
                    </div>
                )
                )
            }
        </div>
    )


};
export default HomePage;