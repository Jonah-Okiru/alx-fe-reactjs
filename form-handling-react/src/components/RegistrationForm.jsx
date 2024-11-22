import { useState } from 'react';

const RegistrationForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    username: '', // Matches `value={username}`
    email: '',    // Matches `value={email}`
    password: '', // Matches `value={password}`
  });

  const [errors, setErrors] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly destructure `name` and `value`
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the appropriate field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure form fields directly for explicit validation
    const { username, email, password } = formData;

    // Explicit validation for individual fields
    if (!username) {
      setErrors('Username is required');
      return;
    }
    if (!email) {
      setErrors('Email is required');
      return;
    }
    if (!password) {
      setErrors('Password is required');
      return;
    }

    // Clear errors and log the form data
    setErrors('');
    console.log('Form submitted successfully:', { username, email, password });

    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  // Destructure form fields for easier usage
  const { username, email, password } = formData;

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}

      <label htmlFor="username">Name</label>
      <input
        type="text"
        name="username" // Must match the key in the state
        value={username} // Explicitly destructured value
        onChange={handleChange} // Update state on change
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email" // Must match the key in the state
        value={email} // Explicitly destructured value
        onChange={handleChange} // Update state on change
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password" // Must match the key in the state
        value={password} // Explicitly destructured value
        onChange={handleChange} // Update state on change
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
