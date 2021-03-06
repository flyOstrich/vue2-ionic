var path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "vue2-ionic.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // 'babel-loader' is also a valid name to reference
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'raw' // 'babel-loader' is also a valid name to reference
            }
        ],
        devtool: '#inline-srouce-map'
    }
}