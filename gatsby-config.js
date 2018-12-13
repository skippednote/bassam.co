module.exports = {
  siteMetadata: {
    title: 'Bassam Ismail',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@skippednote',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bassam Ismail',
        short_name: 'Bassam',
        start_url: '/',
        background_color: '#3399ff',
        theme_color: '#3399ff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`, `Open Sans`],
      },
    },
  ],
};
