require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Shawtown Neighborhood Association'
  },
  pathPrefix: '/shawtown-web',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node, object, isArray }) => node.name
      }
    },
    {
      resolve: 'gatsby-plugin-mdx'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'agendas',
        path: `${__dirname}/src/meetings/agendas/`
      },
      __key: 'agendas'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'minutes',
        path: `${__dirname}/src/meetings/minutes/`
      },
      __key: 'minutes'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'documents',
        path: `${__dirname}/src/documents/`
      },
      __key: 'documents'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`
      },
      __key: 'data'
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-YZYEKSE7G4']
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shawtown Neighborhood Association',
        short_name: 'Shawtown',
        start_url: '/',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-source-surveyjs',
      options: {
        accessKey: `${process.env.GATSBY_KEY_SURVEYJS}`
      }
    }
  ]
};
