import React, { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Recipe title is required.";
        if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
        if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

        const ingredientList = ingredients.split("\n").filter((item) => item.trim() !== "");
        if (ingredientList.length < 2) {
            newErrors.ingredients = "Please provide at least two ingredients.";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Clear errors and log data
        setErrors({});
        const newRecipe = {
            title,
            ingredients: ingredients.split("\n").filter((item) => item.trim() !== ""),
            steps,
        };
        console.log("New Recipe:", newRecipe);

        // Clear form
        setTitle("");
        setIngredients("");
        setSteps("");
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h2>
            {Object.keys(errors).length > 0 && (
                <div className="mb-4">
                    {Object.values(errors).map((error, index) => (
                        <p key={index} className="text-red-500">
                            {error}
                        </p>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Recipe Title */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter recipe title"
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter each ingredient on a new line"
                        rows="4"
                    />
                </div>

                {/* Preparation Steps */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter preparation steps"
                        rows="6"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;
