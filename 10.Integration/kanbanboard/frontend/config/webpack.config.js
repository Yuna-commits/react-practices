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
            API_BASE_URL: JSON.stringify(
                process.env.NODE_ENV === "development"
                    ? "/api"
                    : "http://aws.my-ec2.com/api"
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
        // CORS 문제 우회, 방지(임시 해결책)
        proxy: [
            /**
             * - 9090 서버가 /api 요청을 받으면 devServer가 8080으로 대신 전달
             * - 브라우저는 같은 origin(9090)으로 인식 -> CORS 검사 x
             *
             * - /api, /assets(이미지 업로드) 요청을 8080으로 전달
             */
            {
                context: ["/api", "/assets"],
                target: "http://localhost:8080",
            },
        ],
    },
};
