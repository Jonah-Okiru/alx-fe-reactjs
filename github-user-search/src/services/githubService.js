import axios from 'axios';
const BASE_URL = 'https://api.github.com/users';
/**
 * Fetch user data from GitHub API.
 * @param {string} username -the github username to search for
 * @returns {promise<object>} -The user data from API
 * @throws {Error} -if the API results fails
 */
export const fetchUserData = async (username) =>{
    try{
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data; //Return user data
    } catch (error){
        console.error ('Error fetching user data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};