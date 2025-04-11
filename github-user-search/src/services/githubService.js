import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchUserData = (username) => {
  return axios.get(`${BASE_URL}/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
};
