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
        <div >
            <h1 className="text-blue-700 sm:text-center md:text-center lg:text-center xl:text-center font-bold pb-3">Recipe list</h1>
            <div className="space-x-2 space-y-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    recipes.map((recipe)=> (
                        <div key={recipe.id} className="bg-pink-200 hover:shadow-lg">
                            <img src={recipe.image} className="mx-auto pt-2 rounded-full h-36 w-36 sm:h-24 sm:w-24 md:h-40 md:w-40 hover:scale-110 transition-transform ease-in-out" alt="Image"/>
                            <p className="text-black font-bold decoration-2">{recipe.title}</p>
                            <p className="pb-3 font-semibold">{recipe.summary}</p>
                        </div>
                    )
                    )
                }
            </div>
            
        </div>
    )


};
export default HomePage;