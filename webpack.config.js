const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    watch: true,

    devServer: {
        inline: true
    },
    module: {
        loaders: [{
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    }
};