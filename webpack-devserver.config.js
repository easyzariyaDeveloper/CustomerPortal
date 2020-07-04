import { API_ENDPOINT } from './src/constant';
const cookieParser = require("cookie-parser");

const path = require('path');


const devServer = {
    port: 8888,
    overlay: {
        warnings: true,
        errors: true
    },
    stats: {
        colors: true
    },
    //clientLogLevel: 'error',
    //  open: true,
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    before: function (app) {
        app.use(cookieParser());
        app.use(function (req, res, next) {
          if (req.cookies["access_token"] && !req.cookies["access_token"].includes("bearer")) {
            req.headers["access_token"] = "bearer " + req.cookies["access_token"];
          }
          if (req.url.includes("assets")) {
            next();
          } else if (
            !["/login"].includes(req.url) &&
            !req.cookies["access_token"]
          ) {
            res.redirect("/login");
          } else {
            next();
          }
        });
    },
    proxy: {
        "/api/": {
          target: API_ENDPOINT,
          changeOrigin: true,
          pathRewrite: function(path){
              return path.replace("/api", "");
          },
        },
    },
};
export default devServer;
