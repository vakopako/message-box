const express = require("express");
// const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const path = require("path");

// const webpackConfig = require("../webpack.config.js");

const app = express();

// const compiler = webpack(webpackConfig);

// app.use(
//     webpackDevMiddleware(compiler, {
//         // hot: true,
//         // filename: "../static/bundle.js",
//         publicPath: "/",
//         // stats: {
//         //     colors: true
//         // },
//     })
// );

app.get("/", function (req, res) {
    res.sendFile(
        path.join(__dirname, "../static/index.html")
    );
});

app.use(express.static(
    path.join(__dirname, "../static")
));

const server = app.listen(3333, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Listening at http://%s:%s", host, port);
});