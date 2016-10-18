// var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var webpack = require('webpack');

webpackConfig = {
  entry: './main.js',
  // entry: {
  //     bundle: './main.js',
  //     styles: './scss/main.scss'
  // },
  output: {
    path: __dirname,
    filename: './static/build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
          loader: 'file-loader'
      },
      // {
      //   test: /\.scss$/,
      //   loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      // }
    ]
  },
  plugins: [
      new ExtractTextPlugin('./static/styles.css', {
          allChunks: true,
          // disable: true
      })
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      vuex: 'vuex/dist/vuex.js'
  }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

module.exports = webpackConfig;