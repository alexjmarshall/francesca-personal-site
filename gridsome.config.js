// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "9qzc59ctymxn",
        accessToken: "33v_0sX00emXJchamuuIRXW3Z5GT6YHZQGGSnIf117w",
        host: "cdn.contentful.com",
        environment: "master",
        typename: "Contentful"
      }
    }
  ]
}