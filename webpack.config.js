const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "source-map",
  output:{
	  path: path.resolve(__dirname, 'dist'),
	  filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.css$/, 
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [ 'file-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};