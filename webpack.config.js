const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  // entry: {
  //   main: path.resolve(__dirname, "src/index.js"),
  // },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "[name].bundle.[contenthash].js",
  //   assetModuleFilename: "[name][ext]",
  //   clean: true,
  // },

  // mode: "development",
  mode: mode,
  target: target,
  module: {
    rules: [
      {
        // test: /\.s?css$/i,
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // wird in diesem beispiel via export in der: babel.config.js erledigt
          // options: {
          //   presets: ["@babel/preset-env"],
          // },
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      //   publicPath: "/test-example",
    },
    compress: true,
    port: 8080,
    open: true,
    hot: false,
  },
};
