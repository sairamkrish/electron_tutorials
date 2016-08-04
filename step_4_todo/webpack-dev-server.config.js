// This config and webpack, webpack-dev-server is used only for development

var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/renderer/App.js']
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      })
  ],
  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
              test: /\.(eot|ttf|svg|woff|woff2)$/,
              loader: 'file-loader',
            },
      { test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window' }

    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}
