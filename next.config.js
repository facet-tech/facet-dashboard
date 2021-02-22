const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages], [withCSS]], {
  exportPathMap: async function (
    defaultPathMap, { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/authentication': { page: '/authentication' },
      '/dashboard': { page: '/dashboard' },
      '/user-profile': { page: '/user-profile' },
      '/payment': { page: '/payment' },
    }
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  trailingSlash: true,
});
