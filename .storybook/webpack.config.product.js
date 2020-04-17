"use strict";
const webpack = require("webpack");
const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const pkg = require("../package.json");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(ROOT, "dist"),
        libraryTarget: "commonjs2",
        library: pkg.name,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: ["node_modules", path.resolve(ROOT, "src"), path.resolve(ROOT, "src/components"), path.resolve(ROOT, "src/assets")],
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
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
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
        new webpack.DllReferencePlugin({
            context: path.join(ROOT, "dist"),
            manifest: require("../dist/lib.json")
        }),
    ],
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
            root: "ReactDOM",
        },
        "classnames": {
            commonjs: "classnames",
            commonjs2: "classnames",
            amd: "classnames",
            root: "classNames"
        },
        "moment": {
            commonjs: "moment",
            commonjs2: "moment",
            amd: "moment",
            root: "moment"
        },
    },
};
