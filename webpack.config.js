const path = require('path');
const webpack = require('webpack');

const watch = (process.env.NODE_ENV !== 'production');

module.exports = {
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    watch: watch,

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