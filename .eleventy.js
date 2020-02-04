const { DateTime } = require('luxon');
const he = require('he');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItContainer = require('markdown-it-container');
const markdownItFootnote = require('markdown-it-footnote');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

// const installPrismLanguages = require("./prism-languages.js");
// const expandFeatureSupport = require("./feature-support.js");

const markdownItConfig = {
  html: true,
  breaks: true,
  linkify: false
};
const markdownItAnchorConfig = {
  permalink: true,
  permalinkClass: 'bookmark',
  permalinkSymbol: '#',
  permalinkBefore: true
};

const md = markdownIt(markdownItConfig)
  .use(markdownItFootnote)
  .use(markdownItAttrs)
  .use(markdownItContainer, 'note')
  .use(markdownItContainer, 'table-wrapper')
  .use(markdownItAnchor, markdownItAnchorConfig);

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('link', 'layouts/link.njk');

  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('dd LLLL yyyy');
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('markdown', string => {
    return md.renderInline(string);
  });

  eleventyConfig.addFilter('decodeHtmlEntities', string => {
    return he.decode(string);
  });

  eleventyConfig.addFilter('clean', path => {
    if (path === '/') return path;
    if (path === 'https://bassam.co/') return path;
    if (path.endsWith('/')) return path.slice(0, -1);
    return path;
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter('head', (array, n) => {
    return array.slice(0, n);
  });

  eleventyConfig.addFilter('filterBlogPosts', array => {
    return array.filter(post => post.inputPath.startsWith('./src/blog/'));
  });

  // eleventyConfig.addFilter("filterFeaturePosts", array => {
  //   return array.filter(post => post.inputPath.startsWith("./src/features/"));
  // });

  // Create a collection for blog posts only.
  eleventyConfig.addCollection('posts', collection => {
    return collection
      .getFilteredByGlob('src/blog/*.md')
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection('links', collection => {
    return collection
      .getFilteredByGlob('src/link/*.md')
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection('linksAndPosts', collection => {
    return collection
      .getFilteredByGlob(['src/link/*.md', 'src/blog/*.md'])
      .sort((a, b) => b.date - a.date);
  });

  // Patch the Markdown renderer to recognize <feature-support>.
  // const oldRender = md.render.bind(md);
  // md.render = input => {
  //   const preprocessed = expandFeatureSupport(input);
  //   return oldRender(preprocessed);
  // };

  // Treat `*.md` files as Markdown.
  eleventyConfig.setLibrary('md', md);

  eleventyConfig.addCollection('tagList', collection => {
    const set = new Set();
    for (const item of collection.getAllSorted()) {
      if ('tags' in item.data) {
        const tags = item.data.tags;
        if (typeof tags === 'string') {
          tags = [tags];
        }
        for (const tag of tags) {
          set.add(tag);
        }
      }
    }
    return [...set].sort();
  });

  // Copy assets that don’t require a build step.
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/_img');
  eleventyConfig.addPassthroughCopy('src/_css/img');

  return {
    templateFormats: ['md', 'njk', 'html'],

    pathPrefix: '/',

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    }
  };
};
