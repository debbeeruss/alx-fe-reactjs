import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// 🔍 For simple user lookup: https://api.github.com/users/{username}
export const fetchUserData = (username) => {
  return axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
};

// 🔎 For advanced search: https://api.github.com/search/users?q={query}
export const searchUsers = ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  return axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
};
