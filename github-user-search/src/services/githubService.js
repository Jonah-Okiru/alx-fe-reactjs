import axios from 'axios';
const BASE_URL = "https://api.github.com/search/users?q";
/**
 * Fetch user data from GitHub API.
 * @param {string} params -the search parameters
 * @param {string} params.query -username or general search query
 * @param {string} params.location -user location
 * @param {string} params.minRepos -minimum repository
 * @returns {promise<object[]>} -arrays of user results
 * @throws {Error} -if the API results fails
 */
export const fetchUserData = async ({query, location, miniRepos}) =>{
    try{
        // building the search query string.
        let searchQuery = query || '';
        if (location) searchQuery += `location: ${location}`
        if (minRepos) searchQuery += `repos: > ${minRepos}`
        const response = await axios.get(`${BASE_URL}/search/users?q=${{searchQuery}}`);
        return response.data.items; //Return user data
    } catch (error){
        console.error ('Error fetching user data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};