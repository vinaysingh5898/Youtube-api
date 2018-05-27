module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {

    //proxy: { // proxy URLs to backend development server
      //'/api': 'http://localhost:3000'
    //},
    host: "0.0.0.0",
    historyApiFallback: true,
    contentBase: './',
    port:3000
  }
};