const path = require("path");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
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
  module: {
    rules: [
      {
        test: /\.js$/,
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
