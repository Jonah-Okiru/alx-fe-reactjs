import axios from 'axios';
const BASE_URL = 'https://api.github.com';
const githubApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
    },
});
export const searchUsers = (query) => {
    return githubApi.get(`/search/users?q=${query}`);
};
export const getUserDetails = (username) => {
    return githubApi.get(`/users/${username}`);
};