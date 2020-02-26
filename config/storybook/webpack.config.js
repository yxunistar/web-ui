const path = require("path");
const webpack = require("webpack");

module.exports = async ({ config }) => {
    const ROOT = path.resolve(__dirname, "../");
    const finalConfig = {
        ...config,
        mode: "development",
        entry: {
            library: path.resolve(ROOT, "src/index"),
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".css", ".sass"],
            modules: ["node_modules", path.resolve(ROOT, "src")],
            alias: {
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
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("develop"),
                    DEV: JSON.stringify("DEV"),
                },
            }),
        ],
    };
    console.log(finalConfig);
    return finalConfig;
};
