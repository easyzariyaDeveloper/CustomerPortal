const { BASE_API_ENDPOINT } = require("../constant");

export async function getDataFromAPI(...args) {
    const [endPoint = "", method = "", data = {}] = args;
    try {
        const response = await fetch(`${BASE_API_ENDPOINT}/${endPoint}`);
        return response.json()
    } catch (error) {
        console.log(error);
        /**
         * 
         */
    }
}
