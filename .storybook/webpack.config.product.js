"use strict";

const path = require("path");
const ROOT = path.resolve(__dirname, "../");
const pkg = require("../package.json");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(ROOT, "dist"),
        libraryTarget: "umd",
        library: pkg.name,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".sass"],
        modules: ["node_modules", path.resolve(ROOT, "src"), path.resolve(ROOT, "src/components")],
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
