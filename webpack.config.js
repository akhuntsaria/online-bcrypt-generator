const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
    },
    entry: './src/index.js',
    externals: {
        bcrypt: 'bcrypt'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify")
        }
    }
};
