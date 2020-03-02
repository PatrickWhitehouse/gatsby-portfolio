module.exports = {
  siteMetadata: {
    title: `Patrick Whitehouse`,
    description: `Personal portfolio of Patrick Whitehouse, a front end developer based in Manchester, UK.`,
    author: `@patrickdoesweb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
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
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-scroll-reveal`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Whitehouse - Front End Developer`,
        short_name: `Patrick Whitehouse's Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: "standalone",
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
