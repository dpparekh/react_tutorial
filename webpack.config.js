module.exports = {
  context: __dirname + '\\src',
  entry: "./js/main.js",
  output: {
      path: __dirname + '/src/public/js',
      filename: 'bundle.js',
      publicPath: '/src/public/js'
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react']
          },
          include: __dirname + '\\src\\js'
        },
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            presets: ['react']
          },
          include: __dirname + '\\src\\js'
        },
        {
            test:   /\.css$/,
            loader: 'style!css'
        },
        {
          test:   /\.html$/,
          loader: 'html'
        }
      ]
    },
  devServer: {
    proxy: {
      "/api/*" : {
        target: "http://localhost:7000",
        secure: false
      }
    }
  }
}
