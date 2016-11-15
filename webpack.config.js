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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-vue-jsx"]
                }
            }
        ],
        devtool: '#inline-srouce-map'
    }
}