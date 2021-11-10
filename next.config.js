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
  // distDir: 'build', // custom build directory

  // pageExtensions: ["page.js"],
}