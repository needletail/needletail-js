var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/Client.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'needletail.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['last 2 versions', 'ie >= 10']
                                }
                            }
                        ]
                    ],
                    plugins: [
                        '@babel/plugin-transform-classes'
                    ]
                }
            }
        }]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
