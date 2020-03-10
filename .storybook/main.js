const custom = require("../config/webpack.config")

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: (config) => {
        return { ...config, module: { ...config.module, rules: custom.module.rules } };
    }
}
