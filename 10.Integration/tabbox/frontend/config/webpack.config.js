const path = require("path");
const webpack = require("webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve("src/index.js"),
    output: {
        path: path.resolve("../backend/src/main/resources"),
        filename: "assets/js/main.js",
        assetModuleFilename: "assets/images/[hash][ext]",
    },
    module: {
        rules: [
            {
                test: /\.js/i,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    configFile: path.resolve("config/babel.config.json"),
                },
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            API_HOST: JSON.stringify(
                process.env.NODE_ENV === "development"
                    ? ""
                    : "http://192.168.0.181:8080"
            ),
        }),
    ],
    devServer: {
        host: "0.0.0.0",
        port: 9090,
        liveReload: true,
        static: {
            directory: path.resolve("public"),
            watch: false,
        },
        compress: true,
        hot: false,
        historyApiFallback: true,
        proxy: [
            {
                context: ["/api"],
                target: "http://localhost:8080",
            },
        ],
    },
};
