import devServer from "../webpack-devserver.config";

//http://localhost:8080
// export const API_ENDPOINT = "https://easyzariyademo.azurewebsites.net/";
export const API_ENDPOINT = "http://api.ezautocare.in";
export const SITE_ENDPOINT = "http://api.ezautocare.in";
export const BASE_API_ENDPOINT = process.env.NODE_ENV !== "production" ? 
    `http://localhost:${devServer?.port}/api` : 
    `${SITE_ENDPOINT}/api`

    console.log("===========>", BASE_API_ENDPOINT);


    