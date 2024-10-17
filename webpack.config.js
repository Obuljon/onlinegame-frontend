const path = require("path")
const HtmlWebpackPlagin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "file-loader"],
            },
            {
                test: /\.(js|jsx|ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(css|sass|scss)$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: path.resolve(
                __dirname,
                "public",
                "index.html",
            ),
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true,
        },
        host: "localhost",
        port: 8080,
        open: true,
        liveReload: true,
        compress: true,
        historyApiFallback: true,
    },
}
