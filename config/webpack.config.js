"use strict";

const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ROOT = path.resolve(__dirname, "../");

module.exports = {
    entry: "./index.js",
    mode: "development",
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "../src/components/"),
        },
        extensions: [".wasm", ".mjs", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
    output: {
        filename: "index.js",
        path: path.resolve(ROOT, "dist"),
        libraryTarget: "umd",
        library: "pf2-web-ui",
    },
};
