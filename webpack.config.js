const path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./src/Needletail.ts'],
    output: {
        path: __dirname,
        filename: 'needletail-js.min.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
};