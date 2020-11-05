var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `./src/app.js`,
  output: {
    filename: 'bundle.js',
    path:  path.resolve(__dirname,"./public")
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname,"./src"),
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};