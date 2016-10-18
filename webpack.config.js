module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
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
      }
    ]
  },
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