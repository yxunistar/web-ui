"use strict";

const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ROOT = path.resolve(__dirname, "../");
const pkg = require("../package.json");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    resolve: {
        extensions: [".wasm", ".mjs", ".js", ".json"],
        modules: ["node_modules", path.resolve(ROOT, "src"), path.resolve(ROOT, "src/components")],
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
        library: pkg.name,
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React",
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM",
        },
    },
};
