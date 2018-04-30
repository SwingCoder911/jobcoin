const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    signin: './src/client/pages/SigninPage.jsx',
    transactions: './src/client/pages/TransactionsPage.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    sourceMapFilename: '[name].map'
  },
  module: {
      rules: [
        {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.html$/,
            loader: "file-loader?name=[name].[ext]",
        },
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        },
        {
            test: /\.(jpe?g|png|gif)$/,
            loader: "file-loader?name=[path][name].[ext]"
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }
      ]
  },
  resolve:{
    extensions: ['.js', '.jsx']
  },
  mode: "development",
  plugins:[
      new CopyWebpackPlugin([
          {from: 'src/client/images/*', to: "images/", flatten: true}
      ])
  ]
};