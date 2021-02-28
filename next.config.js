const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withImages], [withCSS]],
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
  },
  {
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
    trailingSlash: true,

  });