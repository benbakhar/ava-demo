const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: [path.join(__dirname, './index.ts')]
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './public'),
        sourceMapFilename: '[name].js.map',
        publicPath: './public'
    },
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
