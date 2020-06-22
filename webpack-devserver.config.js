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
    proxy: {
        "/api/": {
          target: API_ENDPOINT,
          secure: false,
          changeOrigin: true,
          pathRewrite: function(path){
              console.log(path, path.replace("/api", ""));
              return path.replace("/api", "");
          },
        },
    },
};
export default devServer;
