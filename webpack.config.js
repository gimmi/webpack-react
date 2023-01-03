const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: [
        "./src/index.scss",
        "./src/index.js",
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        clean: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(scss|sass|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.woff2?$/,
                type: "asset/resource",
            }
        ],
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlPlugin({
            template: "src/index.html",
        }),
    ],
};
