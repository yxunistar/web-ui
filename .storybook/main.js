const custom = require("./webpack.config.development.js");

module.exports = {
    stories: ["../src/**/*.stories.js"],
    addons: ["@storybook/addon-actions", "@storybook/addon-links"],
    webpackFinal: (config, { configType }) => {
        if (configType === "DEVELOPMENT") {
            return {
                ...config,
                resolve: {
                    ...config.resolve,
                    ...custom.resolve,
                },
                module: {
                    ...config.module,
                    rules: custom.module.rules,
                },
            };
        }
        return config;
    },
};
