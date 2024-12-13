import React, {useState} from 'react';

const Search = ({onSearch}) =>{
    const [result, setResult] = useState(null);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
    };
    const handleSearch = async (query) =>{
        setLoading(true);
        setError(null);
        setResult(null);
        try{
            const userData = await fetchUserData(query);
            setResult(userData);
        } catch (err){
            setError("Looks like we cant find the user");
        } finally{
            setLoading(false);
        }
    };
    return (
        <div>
            <h>Github user search</h>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type ="text"
                    placeholder = "Search github users"
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>

            </form>
            <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            result && (
                <div>
                    <img 
                        src={result.avatar_url}
                        alt={`${result.login} avatar`}
                    />
                    <h2>{result.login}</h2>
                    <p>
                        <a 
                            href={result.html_url}
                            target="_blank"
                            rel ="noopener no referrer"
                        >
                            Visit Profile
                        </a>
                    </p>
                </div>
            )
            </div>
        </div>
        
    );
};
export default Search;