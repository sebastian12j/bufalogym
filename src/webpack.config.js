// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

module.exports = {
  entry: './src/index.tsx', // Cambia esto a la ruta de tu archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // DefinePlugin permite definir variables globales accesibles en toda tu aplicación
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
