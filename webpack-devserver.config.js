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
          changeOrigin: true,
          pathRewrite: function(path){
              return path.replace("/api", "");
          },
        },
    },
};
export default devServer;
