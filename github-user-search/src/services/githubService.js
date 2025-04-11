import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  return axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
};
