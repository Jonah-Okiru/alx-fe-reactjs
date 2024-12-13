import React, {useState} from 'react';
const Search = ({onSearch}) =>{
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (query.trim()){
            onSearch(query);
        }
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type ="text"
                placeholder = "Search github users"
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>

        </form>
    );
};
export default Search;