import webpack from "webpack";
import config from "../webpack.config";
import chalk from "chalk";
import WebpackDevServer from "../node_modules/webpack-dev-server";
import devServerOptions from "../webpack-devserver.config";

console.log(
  chalk.blue(
    `Starting the Webpack build for environment ${process.env.NODE_ENV}`
  )
);

const complier = config(process.env.NODE_ENV);
if (true || process.env.NODE_ENV === "development") {
  const server = new WebpackDevServer(webpack(complier), devServerOptions);

  server.listen(devServerOptions.port, "127.0.0.1", () => {
    console.log(`Starting server on http://localhost:${devServerOptions.port}`);
  });
} else {
  webpack(complier).run((error, stats) => {
    if (error) {
      console.log(chalk.red(error));
    } else {
      const jsonStats = stats.toJson();

      if (jsonStats.hasErrors) {
        return jsonStats.errors.map((error) => console.log(chalk.red(error)));
      }

      if (jsonStats.hasWarnings) {
        console.log(chalkWarning("Webpack generated the following warnings: "));
        jsonStats.warnings.map((warning) => console.log(chalk.orange(warning)));
      }

      console.log(`Webpack stats: ${stats}`);
      console.log(chalk.green("Your app is build successfully"));
    }
  });
}
