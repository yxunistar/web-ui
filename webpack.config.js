// eslint-disable-next-line filenames/match-regex
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "scripts/main.js",
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js|jsx$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["env", "react"],
                    plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-syntax-dynamic-import"],
                    babelrc: false,
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, "src")],
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
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                },
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/images/[name].[ext]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: "file-loader",
                options: {
                    limit: 8192,
                    name: "/assets/fonts/[name].[ext]",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: ["node_modules", path.resolve(__dirname, "src/")],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/](devextreme|devextreme-react)[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                },
            },
        },
    },
    performance: {
        hints: false,
    },
};
