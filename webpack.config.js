const webpack = require("webpack");
const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack')
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
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
    rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ["es2015", {
                modules: false
              }]
            ]
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                minimize: false,
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader",
              options: {
                includePaths: [path.resolve(__dirname, "src")]
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }]
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
    new ExtractTextPlugin('styles.css'),
    // Make sure this is after ExtractTextPlugin!
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.ejs')),
      minimize: true
    }),
    new HtmlWebpackPlugin({
      title: "Restaurant website",
      minify: {
        collapseWhitespace: false
      },
      hash: true,
      template: "./src/index.ejs"
    }),
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   Popper: ["popper.js", "default"]
    // }),
    extractSass
  ]
};