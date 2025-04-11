import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      if (location || minRepos) {
        // Advanced search
        const response = await searchUsers({ username, location, minRepos });
        setResults(response.data.items);
      } else {
        // Basic search
        const response = await fetchUserData(username);
        setResults([response.data]); // Wrap in array for consistency
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition col-span-full"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="flex items-center gap-4 p-4 bg-gray-100 rounded-md">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-bold text-lg">{user.login}</h3>
                  {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
                  <p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      GitHub Profile
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;
