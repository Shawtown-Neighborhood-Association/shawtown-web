module.exports = {
  siteMetadata: {
    title: "Shawtown Neighborhood Association",
  },
  pathPrefix: "/shawtown-web",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "agendas",
        path: `${__dirname}/src/meetings/agendas/`
      },
      __key: "agendas",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "minutes",
        path: `${__dirname}/src/meetings/minutes/`
      },
      __key: "minutes",
    },
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
    "gatsby-plugin-mdx"
  ],
};
