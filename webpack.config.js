const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Needed for Service Worker
const WorkboxPlugin = require('workbox-webpack-plugin');
// Create Manifest.json dynamically.
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    ],
    sw: "./src/sw.js"
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
    }),
    new WorkboxPlugin.InjectManifest({ swSrc: "./src/sw.js" }),
    new WebpackPwaManifest({
      "name": "Reactify",
      "short_name": "Reactify",
      "icons": [
        {
          "src": path.resolve("public/favicon.ico"),
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        }
      ],
      "start_url": "./?utm_source=pwa",
      "display": "standalone",
      "theme_color": "#000000",
      "background_color": "#ffffff"
    })
  ],
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    proxy: {
      "/api/**": "http://localhost:3001/**",
      "/static": "http://localhost:3001/static/**"
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