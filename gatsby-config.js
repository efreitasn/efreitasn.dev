const { resolve } = require('path');

const FEED_FILE = 'rss.xml';

module.exports = {
  siteMetadata: {
    title: `efreitasn`,
    description: `A front-end dev.`,
    siteUrl: 'https://efreitasn.dev',
    feedUrl: `https://efreitasn.dev/${FEED_FILE}`,
    author: {
      firstName: 'Emanuel',
      lastName: 'Freitas',
      fullName: 'Emanuel Freitas',
      twitter: '@efreitasn'
    },
    links: {
      twitter: 'https://twitter.com/efreitasn',
      github: 'https://github.com/efreitasn',
      mail: 'mailto:me@efreitasn.dev',
      gitRepo: 'https://github.com/efreitasn/efreitasn.dev'
    }
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                feedUrl
                author {
                  fullName
                }
              }
            }
          }
        `,
        setup: ({
          query: { site }
        }) => ({
          title: site.siteMetadata.title,
          description: site.siteMetadata.description,
          site_url: site.siteMetadata.siteUrl,
          feed_url: site.siteMetadata.feedUrl,
          generator: 'GatsbyJS'
        }),
        feeds: [
          {
            output: FEED_FILE,
            query: `
              {
                allMarkdownRemark(
                  limit: 100,
                  sort: {
                    order: DESC,
                    fields: [
                      frontmatter___date
                    ]
                  }
                ) {
                  edges {
                    node {
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        description
                        date
                        title
                        keywords
                      }
                    }
                  }
                }
              }
            `,
            serialize: ({
              query: {
                site,
                allMarkdownRemark
              }
            }) => allMarkdownRemark.edges.map(edge => ({
              description: edge.node.description,
              date: edge.node.frontmatter.date,
              title: edge.node.frontmatter.title,
              author: site.siteMetadata.author.fullName,
              categories: edge.node.frontmatter.keywords.split(', '),
              url: site.siteMetadata.siteUrl + edge.node.fields.slug,
              custom_elements: [
                {
                  'content:encoded': edge.node.html
                }
              ]
            }))
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.ANALYTICS_ID
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout.tsx`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
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
