import axios from "axios"
import { BaseUrl } from "./Environment"

// Generic API utility function for making HTTP requests
export const API = async (method = 'get', url = '', params = '', apiBody = {}) => {
    // Create the API request configuration
    const apiCall = await axios({
        method: method,                   // HTTP method (GET, POST, PUT, DELETE, etc.)
        url: `${BaseUrl}${url}${params}`, // Full URL with base URL and params
        data: apiBody,                    // Request body for POST/PUT requests
    })
        .then(response => {
            return response; //Get the response of successful
        })
        .catch(error => {
            return error; //Get the response of error
        });

    // Return the response 
    return apiCall;
}