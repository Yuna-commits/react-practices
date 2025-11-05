const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve("src/index.js"), // 번들링 시작 파일
    // 결과
    output: {
        path: path.resolve("public"),
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
                    { loader: "css-loader", options: { modules: true } },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: "asset/resource",
            },
        ],
    },
    devServer: {
        host: "0.0.0.0",
        port: 9090,
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
             * - 9090 서버가 /item 요청을 받으면 devServer가 8080으로 대신 전달
             * - 브라우저는 같은 origin(9090)으로 인식 -> CORS 검사 x
             *
             * - /item, /assets(이미지 업로드) 요청을 8080으로 전달
             */
            {
                context: ["/item", "/assets"],
                target: "http://localhost:8080",
            },
        ],
    },
};
