const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: `efreitasn`,
    description: `Pseudo-front-ender.`,
    author: `@efreitasn`,
    links: {
      twitter: 'https://twitter.com/efreitasn',
      github: 'https://github.com/efreitasn',
      linkedin: 'https://www.linkedin.com/in/efreitasn',
      mail: 'mailto:efreitasn@hotmail.com',
      medium: 'https://medium.com/@efreitasn',
      codepen: 'https://codepen.io/efreitasn'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `efreitasn`,
        short_name: `efreitasn`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#7AD1E6`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'Components': resolve(__dirname, 'src/components'),
          'Pages': resolve(__dirname, 'src/pages'),
          'Styles': resolve(__dirname, 'src/styles'),
          'Utils': resolve(__dirname, 'src/utils'),
          'Icons': resolve(__dirname, 'src/icons')
        },
        extensions: []
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
