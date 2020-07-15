import devServer from "../webpack-devserver.config";

export const API_ENDPOINT = "https://easyzariyademo.azurewebsites.net/";
export const BASE_API_ENDPOINT = process.env.NODE_ENV !== "production" ? 
    `http://localhost:${devServer?.port}/api` : 
    `http://localhost:4000/api`

    console.log("===========>", BASE_API_ENDPOINT);