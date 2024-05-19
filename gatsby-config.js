/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  queryLimit: 1000,
  collectionTypes: ["job", "project"],
  singleTypes: ["about"],
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    siteUrl: `https://webdev-skycoding.netlify.app`,
    twitterUsername: `@Brendon52262477`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        accessToken: `8395e7ab9f29bba79e42f4cee746f6acbbe004448623730080edf1d3ddb1c40405f96a91cea7afefad7c5a922f11ed6067b3b0300b088668d20ae7c2326c19a73e7b264e60a99ef3625905e097821340b16914354e81e2ada3172b3e3636e897c563972c12b36fd9609cb544c5e93f5e3223609e886f91a4907f952f2c879827`,
        queryLimit: 1000,
        collectionTypes: ["job", "project"],
        singleTypes: ["about"],
      },
    },
  ],
}
