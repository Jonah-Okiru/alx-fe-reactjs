import { useState } from 'react';

const UseForm = () => {
  // Set variables for form fields
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly destructure `name` and `value`
    setFormData((prevState) => ({ ...prevState, [name]: value })); // Update state using the name as the key
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setErrors('Kindly fill all fields in the form');
      return;
    }

    // Clear errors if any
    setErrors('');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}

      <label htmlFor="username">Name</label>
      <input
        type="text"
        name="username" // Match the key in the state
        value={formData.username} // Bind to state
        onChange={handleChange} // Update state on change
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email" // Match the key in the state
        value={formData.email} // Bind to state
        onChange={handleChange} // Update state on change
      />

      <label htmlFor="password">Password</label>
      <input
        type="password" // Changed to `password` for better user experience
        name="password" // Match the key in the state
        value={formData.password} // Bind to state
        onChange={handleChange} // Update state on change
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UseForm;
