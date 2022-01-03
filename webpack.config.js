const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  // with this the dist folder refresh each time that we build
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        // these rules is for html-loader
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /styles.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /styles.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpe?gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      //   thanks to webpack plugin we can change the aplications title or the name of index.html
      title: "Webpack Template",
      filename: "index.html",
      // we can define the path of the index.htmol into src like mirror for index.html in build
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
