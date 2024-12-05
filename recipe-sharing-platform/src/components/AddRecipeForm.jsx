import { useState } from "react";
function AddRecipeForm () {
    // State for form fields
    const [formData, setFormData] = useState({
        title: '', // matches `value={title}`
        ingridients: '', // matches `value ={ingridients}
        PreparationSteps: '', // matches `value = {preparationSteps}`
    });
    const [errors, setErrors] = useState('');
    // handle input changes
    const handleChange = (e) =>{
        const {name, value} = e.target; // correctly destructure name and value
        setFormData((prevState) =>({
            ...prevState,
            [name]: value, // Dynamically update the approprite field in the form data
        }));

    };
    // handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        // destructure form fields directly for explicit validation
        const {title, ingridients, PreparationSteps} = formData;
        // explicit validation for individual field
        if (!title){
            setErrors('title is required');
            return;
        }
        if (!ingridients) {
            setErrors('ingridients isnrequired');
            return;
        }
        if (!PreparationSteps) {
            setErrors('preparation steps is required');
            return;
        }
        // clear errors and log the form data
        setErrors('');
        console.log("Form submitted successfully:", {title, ingridients, PreparationSteps});
        // Reset form
        setFormData({
            title: '',
            ingridients: '',
            PreparationSteps: '',
        });
    };
    // destructure form fields for easier usage
    const {title, ingridients, PreparationSteps} = formData;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
                type="text" 
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="enter your title here"
            />
            <label htmlFor="ingridients">Ingridients</label>
            <textarea 
                type="text"
                value={ingridients}
                onChange={handleChange}
                placeholder="enter your ingridients here"
            />
            <textarea 
                type = "text"
                value={PreparationSteps}
                onChange={handleChange}
                placeholder="enter your preparation steps here"
            />
            <button type="submit" className="bg-blue-500 text-center rounded-full text-white">Submit Ingridient</button>
            
        </form>
    );

};
export default AddRecipeForm;
