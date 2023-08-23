const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Ваш входной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
  },
  
};