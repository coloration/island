const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const IconsPlugin = require('unplugin-icons/webpack')

// docs: https://storybook.js.org/docs/vue/configure/overview

module.exports = {
  "stories": [
    "../lib/**/*.stories.mdx",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)",
    './docs/*.stories.mdx'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],

  // features: { 
  //   storyStoreV7: true 
  // },
  core:{ 
    builder: 'webpack5'
  },
  // 引用其他 Storybook
  refs: {},
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