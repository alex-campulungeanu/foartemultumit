// module.exports = {
//   reactStrictMode: true,
// }

module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },

  // pageExtensions: ["page.js"],
}