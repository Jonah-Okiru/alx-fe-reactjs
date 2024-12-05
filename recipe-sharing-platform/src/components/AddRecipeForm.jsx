import React, { useState } from 'react';

function AddRecipeForm() {
    // State to manage form inputs
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setSuccess('');

        // Validation logic
        if (!title || !ingredients || !steps) {
            setError('All fields are required.');
            return;
        }

        const ingredientList = ingredients.split(',').map(item => item.trim());
        if (ingredientList.length < 2) {
            setError('Please include at least two ingredients.');
            return;
        }

        // Simulating form submission
        const newRecipe = { title, ingredients: ingredientList, steps };
        console.log('New Recipe:', newRecipe);
        setSuccess('Recipe added successfully!');

        // Reset form fields
        setTitle('');
        setIngredients('');
        setSteps('');
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800">Add a New Recipe</h2>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">{success}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Recipe Title */}
                <div>
                    <label className="block text-gray-700 font-medium">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        placeholder="Enter recipe title"
                    />
                </div>

                {/* Ingredients */}
                <div>
                    <label className="block text-gray-700 font-medium">Ingredients (comma-separated)</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        placeholder="Enter ingredients, separated by commas"
                    ></textarea>
                </div>

                {/* Preparation Steps */}
                <div>
                    <label className="block text-gray-700 font-medium">Preparation Steps</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        placeholder="Enter preparation steps"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;
