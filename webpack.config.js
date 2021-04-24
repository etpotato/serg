module.exports = {
  mode: 'development',
  entry: {
    index: ['./source/js/menu.js', './source/js/form.js'],
    procedure: ['./source/js/menu.js', './source/js/procedure-tabs.js', './source/js/form.js'],
    contact: './source/js/menu.js',
    blank: './source/js/menu.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
  },
};
