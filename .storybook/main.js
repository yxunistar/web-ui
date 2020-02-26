const path = require("path");
const ROOT = path.resolve(__dirname, "../");

module.exports = {
    stories: ["../src/**/*.stories.js[x]"],
    webpackFinal: async (config, { configType }) => {
        const finalConfig = {
            ...config,
            resolve: {
                ...config.resolve,
                extensions: [".js", ".jsx", ".json", ".css", ".sass"],
                modules: ["node_modules", path.resolve(ROOT, "src")],
                alias: {
                    ...config.resolve.alias,
                    components: path.resolve(ROOT, "src/components"),
                },
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        include: [path.resolve(ROOT, "src")],
                        exclude: /node_modules/,
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"],
                            babelrc: false,
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.(js|jsx)$/,
                        include: [path.resolve(ROOT, "src")],
                        exclude: /node_modules/,
                        loader: "eslint-loader",
                        enforce: "pre",
                        options: {
                            configFile: path.resolve(".eslintrc"),
                            failOnWarning: false,
                            failOnError: true,
                        },
                    },
                    {
                        test: /\.(sass|scss)$/,
                        use: ["style-loader", "css-loader", "sass-loader"],
                    },
                    {
                        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        };
        return finalConfig;
    },
};
