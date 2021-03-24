const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages], [withCSS], [
  {
    exportPathMap: async function (
      defaultPathMap, { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/authentication': { page: '/authentication' },
        '/dashboard': { page: '/dashboard' },
        '/applications': { page: '/applications' },
        '/settings': { page: '/settings' },
      }
    },
    trailingSlash: true,

  }
]],
  {
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000'
        },
        {
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        }
      )
      return config
    },
  });