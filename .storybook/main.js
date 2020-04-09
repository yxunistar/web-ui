const custom = require("./webpack.config.development.js");

module.exports = {
    stories: ["../src/**/*.stories.js"],
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
