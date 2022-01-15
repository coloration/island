const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const IconsPlugin = require('unplugin-icons/webpack')
module.exports = {
  "stories": [
    "../lib/**/*.stories.mdx",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    config.plugins.push(IconsPlugin())

    // https://github.com/storybookjs/storybook/issues/15990
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });
    return config
  },
}