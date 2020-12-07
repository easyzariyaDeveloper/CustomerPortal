import axios from "axios";
import { uuid } from "uuidv4";
import { BASE_API_ENDPOINT } from "../constant";

export const AxiosClient = axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 0,
    withCredentials: true,
    responseType: "json",
});


export default function APIWrapper(options) {
    const traceId = uuid();
    const newOptions = {
        ...options,
        headers: {
            "Content-Type":'application/json',
            traceId,
            ...options["headers"]
        },
        url : options?.url.startsWith("/") ? options?.url : `/${options?.url}`
    };
    return AxiosClient({ ...newOptions })
    .then((response) => {
        console.log(`Successfully retrieved the response ${traceId}`);
        return {data: response?.data?.data, status: response?.status};
    })
    .catch((error) => {
        //console.error("Request Failed", JSON.stringify(error));
        /**
         * Handle Error Alert through this
         */
        throw {errorObj: error.response, message: error?.message, status: error?.response?.status};
    });
}
