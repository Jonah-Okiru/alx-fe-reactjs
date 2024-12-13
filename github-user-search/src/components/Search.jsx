import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'query') setQuery(value);
    else if (name === 'location') setLocation(value);
    else if (name === 'minRepos') setMinRepos(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please provide a username to search.');
      return;
    }
    setResults([]);
    setPage(1);
    setHasMore(true);
    await fetchUsers(1);
  };

  const fetchUsers = async (currentPage) => {
    setLoading(true);
    setError(null);

    try {
      const searchQuery = [
        `q=${query}`,
        location && `location:${location}`,
        minRepos && `repos:>${minRepos}`
      ]
        .filter(Boolean)
        .join('+');

      const response = await fetch(`https://api.github.com/search/users?${searchQuery}&page=${currentPage}&per_page=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();

      setResults((prevResults) => [...prevResults, ...data.items]);
      setHasMore(data.items.length > 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchUsers(nextPage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">GitHub User Search</h1>
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="query">
            Username
          </label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleInputChange}
            placeholder="Search by username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleInputChange}
            placeholder="Filter by location"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minRepos">
            Minimum Repositories
          </label>
          <input
            type="number"
            id="minRepos"
            name="minRepos"
            value={minRepos}
            onChange={handleInputChange}
            placeholder="Minimum repositories count"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{user.login}</h2>
              {user.location && <p className="text-sm text-gray-600">Location: {user.location}</p>}
              {user.public_repos !== undefined && <p className="text-sm text-gray-600">Repositories: {user.public_repos}</p>}
              <p className="mt-2">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Visit Profile
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
