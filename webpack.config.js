const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:'./src/index.js',

  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.[hash].bundle.js'
  },

  mode:'development',
  
  devServer:{
    static:{
      directory:__dirname
    },
    open:true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.jpg/,
        type: 'asset/resource'
      }
    ],
  },
  devtool:'source-map',
  plugins: [
    new HtmlWebpackPlugin({
    template: './base.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'main.[hash].css'
  })
],

};
