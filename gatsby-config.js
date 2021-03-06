module.exports = {
  siteMetadata: {
    headerTitle: `Central Filing`,
    title: `Ozzie Kirkby - Central Filing`,
    description: `Engineering Student`,
    author: `Ozzie Kirkby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
   {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
         fonts: [
            {
               family: `Open Sans`,
               variants: [`400`, `600`, `700`]
            },
            {
               family: 'Volkhov',
               variants: [`400`]
            }
         ],
      },
   },
   `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/books`,
        name: `markdown-books`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
