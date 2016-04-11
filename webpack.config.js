module.exports = {
    entry: __dirname + '/src/module-a.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            }, {
                test: /\.js$/,
                loader: "babel-loader",
            }],
    }
}
