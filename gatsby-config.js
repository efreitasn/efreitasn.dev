const { resolve } = require('path');

const FEED_FILE = 'rss.xml';

module.exports = {
  siteMetadata: {
    title: 'efreitasn',
    description: 'A web dev.',
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
      mail: 'mailto:hi@efreitasn.dev',
      gitRepo: 'https://github.com/efreitasn/efreitasn.dev'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            subsets: ['latin'],
            variants: ['400', '700']
          }
        ],
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-mustache-with-siteMetadata',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              showCaptions: true
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
                  limit: 100
                  filter: {
                    frontmatter: {
                      showInFeed: {
                        eq: true
                      }
                    }
                  }
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
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/components/Layout/index.tsx`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'efreitasn',
        short_name: 'efreitasn',
        start_url: '/',
        background_color: '#EDEDED',
        theme_color: '#17677F',
        display: 'standalone',
        icon: 'src/images/icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          'Components': resolve(__dirname, 'src/components'),
          'Styles': resolve(__dirname, 'src/styles'),
          'Utils': resolve(__dirname, 'src/utils'),
          'Types': resolve(__dirname, 'src/types')
        },
        extensions: []
      }
    }
  ],
};
