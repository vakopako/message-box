const path = require("path");

module.exports = {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: ["./main.js"],
    output: {
        path: path.join(__dirname, "static"),
        filename: "bundle.js"
    },
    devServer: {
        port: 3333,
        allowedHosts: "all",
        historyApiFallback: true,
        compress: true,
        static: {
            directory: path.join(__dirname, 'static'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["swc-loader"]
            }
        ]
    }
};