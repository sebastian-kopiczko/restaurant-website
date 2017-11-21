const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
// const LOGO_PATH = path.resolve(__dirname, "fixtures/logo.png")
const extractSass = new ExtractTextPlugin({
  filename: "styles.css"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["es2015", { modules: false }]]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                // minimize: true,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader", "image-webpack-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    //     new FaviconsWebpackPlugin("./src/assets/favicon.png"),
    new HtmlWebpackPlugin({
      title: "Restaurant website",
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: "./src/index.ejs"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: ["popper.js", "default"]
    }),
    extractSass
  ]
};
