/**
 * Created by ypf on 2016/7/10.
 */
var webpack = require('webpack');
var path = require("path");

var webpackConfig = {
    //插件项
    //plugins: [commonsPlugin],

    //页面入口文件配置
    entry: {
        DEMO: './views/Demo.jsx',
        TabPicker: './views/TabPicker.jsx',
        ToDO: './views/ToDO.jsx',
    },
    output: {

        path: path.resolve(__dirname, "dist/js/"),
        publicPath: 'http://192.168.0.122:8080/',
        filename: '[name].bundle.js'
    },

    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {
                test: /\.mcss$/,
                //	loader: "style!css?module&localIdentName=[hash:base64:5]&-url"
                loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
            },
            {
                test: /\.js$/,
                loader: 'babel!jsx',
                exclude: /node_modules/,
                presets: ['es2015', 'react'],
                include: path.join(__dirname, 'views')
            },
            {
                test: /\.json$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: path.join(__dirname, 'views')
            },
            {
                test: /\.jsx$/,
                loader: 'babel!jsx',
                exclude: /node_modules/,
                presets: ['es2015', 'react'],
                include: path.join(__dirname, 'views')
            },
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }

};


module.exports = webpackConfig;
