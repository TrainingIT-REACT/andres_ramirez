const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    main: "./src/index.js",
    vendor: [
      "react",
      "react-dom",
      "redux",
      "react-router-dom",
      "lodash",
      "redux-promise-middleware",
      "redux-promise-middleware-actions"
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    proxy: {
      "**": "http://localhost:3001",
    }
  },
  optimization: {
    runtimeChunk: "single",
    // Detecta qué partes del código no se han llegado a exportar
    usedExports: true,
    sideEffects: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: "vendor",
          name: "vendor",
          enforce: true,
          chunks: "all"
        }
      }
    }
  }
}

module.exports =  (env, argv) => {
  const isDevelopment = argv.mode === "development";
  config.devtool = isDevelopment ? 'eval-source-map' : 'source-map';
  return config;
}