import { API_ENDPOINT } from './src/constant';
const cookieParser = require("cookie-parser");
const path = require('path');

// function skipLogin(req){
//     if(
//         req.url  === "/"  ||
//         req.url.includes("assets") || 
//         req.url.includes("/home") || 
//         req.url.includes("/login") || 
//         req.url.includes("/signup") ||  
//         req.url.includes("/services")) {
//         return true;
//     } else {
//         return false;
//     }
// }

const devServer = {
    port: 8888,
    overlay: {
        warnings: true,
        errors: true
    },
    stats: {
        colors: true
    },
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    before: function (app) {
        app.use(cookieParser());
        app.use(function (req, res, next) {
            if (req.cookies["access_token"] && !req.cookies["access_token"].includes("bearer")) {
                req.headers["access_token"] = "bearer " + req.cookies["access_token"];
            }
            if((req.url.includes("profile")) && !req.cookies["access_token"]){
                return res.redirect(`/login`)
            } else {
                next();
            }
        });
    },
    proxy: {
        "/api/": {
          target: API_ENDPOINT,
          changeOrigin: true,
          pathRewrite: { "^/api": "" },
        },
    },
};
export default devServer;
