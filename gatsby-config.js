const { resolve } = require('path');

module.exports = {
  siteMetadata: {
    title: `efreitasn`,
    description: `A front-end dev.`,
    url: 'https://efreitasn.dev',
    author: {
      firstName: 'Emanuel',
      lastName: 'Freitas',
      fullName: 'Emanuel Freitas',
      twitter: '@efreitasn'
    },
    links: {
      twitter: 'https://twitter.com/efreitasn',
      github: 'https://github.com/efreitasn',
      mail: 'mailto:efreitasn@hotmail.com'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout.jsx`
      }
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
        background_color: `#EDEDED`,
        theme_color: `#17677F`,
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
