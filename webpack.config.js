// ---
// # About this file
// Configuration for Webpack.
// Maintain configuration within this single file and branch here, using 'webpack-merge'.
// ---

const path    = require('path');
const merge   = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

// If we trigger a script through npm, npm sets this information in an environment variable.
const TARGET = process.env.npm_lifecycle_event;


// ---
// Define paths.
// Use absolute paths everywhere to avoid confusion.
// ---

const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Test expects a /<RegExp>/ surrounded by slashes.
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        // Include accepts either a path or an array of paths.
        // NOTE: If include isn't set, Webpack will traverse all files within the base directory. This can hurt performance.
        include: PATHS.app
      }
    ]
  }
};


// ---
// Default configuration.
// Customize configuration per npm script.
// Export the configuration that corresponds to npm script invloked.
// ---

if ( TARGET === "start" || ! TARGET ) {
  module.exports = merge( common, {

    devtool: 'eval-source-map',

    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot:      true,
      inline:   true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if ( TARGET === "build" ) {
  module.exports = merge( common, {

  });
}
