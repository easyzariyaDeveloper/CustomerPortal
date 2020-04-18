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
    historyApiFallback: true
};
export default devServer;
