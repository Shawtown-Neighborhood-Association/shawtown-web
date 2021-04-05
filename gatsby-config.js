module.exports = {
  siteMetadata: {
    title: "Shawtown Neighborhood Association",
  },
  pathPrefix: "/shawtown-web",
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "agendas",
    //     path: `${__dirname}/src/meetings/agendas/`
    //   },
    //   __key: "agendas",
    // },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/meetings/agendas`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-YZYEKSE7G4"
        ]
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
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          pages: require.resolve('./src/layout/Layout.tsx'),
          default: require.resolve('./src/layout/Layout.tsx')
        }
      }
    }
  ],
};
