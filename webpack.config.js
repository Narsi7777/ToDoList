const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for optimized build
  entry: './src/index.jsx', // The entry point of your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // This rule applies to both JS and JSX files
        exclude: /node_modules/, // Exclude files from the node_modules folder
        use: {
          loader: 'babel-loader', // Use Babel loader to transpile JSX
        },
      },
    ],
  },
};
