module.exports = {
  siteMetadata: {
    title: 'Bassam Ismail',
    description: 'Personal blog of Bassam Ismail.',
    siteUrl: 'https://bassam.co',
    author: 'Bassam Ismail',
    social: {
      twitter: '@skippednote',
      github: '@skippednote',
    },
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bassam Ismail',
        short_name: 'Bassam',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#3399ff',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`, `Open Sans`],
      },
    },
    `gatsby-plugin-feed`,
  ],
};
