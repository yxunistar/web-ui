const webpack = require("webpack");
const path = require("path");
const ROOT = path.resolve(__dirname, "../");

module.exports = {
    mode: "production",
    entry: {
        "lib": [
            "react",
            "react-dom",
            "react-datepicker",
        ],
    },
    output: {
        filename: "[name].dll.js",
        path: path.join(ROOT, "dist"),
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(ROOT, "dist", "[name].json"),
            name: "[name]",
            context: path.join(ROOT, "dist"),
        }),
    ],
};