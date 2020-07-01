import { API_ENDPOINT } from './src/constant';

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
    // before: function (app) {
    //     app.use(cookieParser());
    //     app.use(function (req, res, next) {
    //       if (req.url.includes("assets")) {
    //         next();
    //       } else if (
    //         !["/login"].includes(req.url) &&
    //         !req.cookies["authorization"]
    //       ) {
    //         res.redirect("/login");
    //       } else {
    //         next();
    //       }
    //     });
    // },
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
