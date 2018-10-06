var path =  require('path');

const sourcePath = path.join(__dirname, './public');
const buildPath = path.join(__dirname, './build');

module.exports = {
  entry: ["./src/calculator.spec.ts"],
  output: {
    filename: 'bundle.spec.js',
    path: path.resolve(__dirname,"spec")
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader',exclude: /node_modules/,},
    ]
  },  
  resolve: {
    extensions: [".tsx", ".ts", ".js",".json"]
  },
  target: 'web'
};