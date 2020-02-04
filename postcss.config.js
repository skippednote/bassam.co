module.exports = {
  plugins: [
    require('postcss-custom-properties'),
    require('autoprefixer')(),
    require('postcss-import'),
    require('cssnano')({
      preset: 'default'
    })
  ]
};
