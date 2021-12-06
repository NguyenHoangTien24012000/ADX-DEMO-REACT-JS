const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/js/index.js',
    output :{
        filename : 'index.js',
        path : path.resolve(__dirname, 'build')
    },
    mode : 'development',
    watch :true,
    devtool : 'inline-source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
   
}