module.exports = {
  siteMetadata: {
    title: "Shawtown Neighborhood Association",
  },
  pathPrefix: "/shawtown-web",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-YZYEKSE7G4"
        ]
      }
    }
  ],
};
