import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;
const headers = {
    Authorization: "bearer "+TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const response = await axios.get(BASE_URL + url, {
            headers,
            params,
        });

        // Assuming the response data is what you're interested in.
        return response.data;
    } catch (error) {
        console.error("Error in fetchDataFromApi:", error);

        // Handle specific error cases if needed
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Server responded with an error:", error.response.data);
            console.error("Status code:", error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error during request setup:", error.message);
        }

        // Return a more structured error object or rethrow the error if needed
        return { error: true, message: "Failed to fetch data from the API" };
    }
};
