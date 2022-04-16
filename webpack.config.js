const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/template.html",
  }),
  // new HtmlWebpackPlugin(),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
} else {
  plugins.push(new ReactRefreshWebpackPlugin());
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

  // entry: "./src/index.js",

  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].bundle.[contenthash].js",
    assetModuleFilename: "images/[name][ext]",
    // clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(png|ico|jpe?g|webp|gif|svg)$/i,
        // type: "asset/resource",
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },

      {
        // test: /\.s?css$/i,
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
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

  plugins: plugins,

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
