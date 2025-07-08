const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    watchFiles: ["src/**/*", "public/**/*"],
  },
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf_shell",
      remotes: {
        mf_characters: "mf_characters@http://localhost:3001/remoteEntry.js",
        mf_character_detail:
          "mf_character_detail@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./rickandmorty": "./src/assets/rickandmorty.png",
        "./rick": "./src/assets/only-rick.png",
        "./nave": "./src/assets/nave.png",
        "./mrmeesek": "./src/assets/meesek.png",
        "./theme": "./src/constants/theme.js",
        "./translate": "./src/constants/translate.js",
        "./PrimaryButton": "./src/components/Buttons/PrimaryButton.jsx",
        "./Pagination": "./src/components/Pagination/Pagination.jsx",
        "./Card": "./src/components/Card/Card.jsx",
          "./TitleInstructions": "./src/components/TitleInstructions/TitleInstructions.jsx",
        "./FiltersForm": "./src/components/FiltersForm/FiltersForm.jsx",
      },
      shared: {
        react: { singleton: true, eager: false, requiredVersion: "^18.2.0" },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: "^18.2.0",
        },
        "styled-components": { singleton: true, eager: false },
        "react-router-dom": {
          singleton: true,
          eager: false,
          requiredVersion: "^6.23.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
