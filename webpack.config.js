import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import devServer from "./webpack-devserver.config";

const DEV = "development";
const MOBILE = "mobile";

export default (mode) => {
  let config = {};

  /**
   * Setting Basic information
   * Webpack
   */
  config = {
    mode: DEV,
    entry: {
      index: "./src/index.js",
      vendor: [
        "react",
        "react-dom",
        "react-redux",
        "react-router-dom",
        "redux-saga",
        "redux",
      ]
    },
    target: "web",
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".css", ".json"],
    },
  };

  if(process.env.device === MOBILE){
    const entry = {
      mobile: "./src/MobileView/index.js",
      vendor: config.entry["vendor"]
    }
    config = {...config, entry};
  }

  /**
   * Configuring the OutPut directory
   */
  config = {
    ...config,
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: mode === DEV ? `[name].bundle.js` : `[name].[hash].js`,
      chunkFilename: `[name].[hash].js`,
      publicPath: "/",
    },
  };

  /**
   * Setting up Loaders for
   * Processing the files
   */

  // Loader for Typescript, JSX file, JS file
  const rules = [
    {
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            "babel-plugin-styled-components",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
          ],
        },
      },
    },
  ];

  //Loader for CSS file
  rules.push({
    test: /(\.css|\.scss|\.sass)$/,
    use: [
      "style-loader",
      `css-loader?${mode === DEV ? "sourceMap" : ""}`,
      `sass-loader?${mode === DEV ? "sourceMap" : ""}`,
    ],
  });

  //Loader for Image File
  rules.push({
    test: /\.(woff|ttf|eot|gif|png|jpg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader",
  });

  config = {
    ...config,
    module: {
      rules,
    },
  };

  /**
   * Setting up Plugins
   */
  const plugins = [];
  if (mode === DEV) {
    plugins.push(new webpack.NoEmitOnErrorsPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
      __DEV__: mode === DEV ? true : false,
      "mobile": process.env.device === MOBILE
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: path.resolve(__dirname, "src", "index.html"),
    })
  );

  config = {
    ...config,
    plugins,
  };

  /**
   * Attaching Dev server in development mode
   */
  if (mode === DEV) {
    config = {
      ...config,
      devServer,
    };

    config = {
      ...config,
      devtool: "inline-source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    };
  }
  return config;
};
