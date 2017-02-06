var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    //define entry point
    entry: "./src/js/entry.js",

    //define output point
    output: {
        path: __dirname + '/dist',
        filename: "scripts.js"
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: {
                presets: ["latest"]
              }
            },
            {
              test: /\.html$/,
              loader: "raw-loader"
            },
            { test: /\.sass$/,
              loader: ExtractTextPlugin.extract({
                fallbackLoader: "style-loader",
                loader: "css-loader!sass-loader"
              })
            }
        ]
    },
    plugins:[
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ['./'] }
      }),
      new ExtractTextPlugin("styles.css")
    ],
    devtool: "source-map",
    watch: true
};
