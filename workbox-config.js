module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{css,mjs}'],
  swDest: 'dist/sw.js',
  swSrc: 'src/sw.js',
  templatedURLs: {
    '/': ['index.html']
  }
};
