import {useState} from 'react';
const UseForm = () =>{
    // set variable for form fields
    const [formData, setFormData] = useState({name:'', email:'', password:''});
    const [errors, setErrors] = useState('');
    // handle input change
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(prevState => ({...prevState, [name]:value}));
    };
    // handle submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // basic validation
        if( !formData.name || !formData.email || !formData.password){
            setErrors("Kindly fill all fileds in the form")
            return;
        }
        // clear errors if any
        setErrors("")
        console.log(formData);

        
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type='number' name = 'password' value={formData.password} onChange={handleChange} />
            <button type='submit'>Submit</button>

        </form>
    );
};
export default UseForm;