const path = require('path')
const WindiCSS = require('windicss-webpack-plugin').default

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
    config.plugins.push(new WindiCSS())
    return config
  },
}