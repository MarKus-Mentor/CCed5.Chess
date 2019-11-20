const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
        publicPath: "/CCed5.Chess/",
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
        ]
    }
};