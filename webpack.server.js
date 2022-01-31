const path = require('path');

module.exports = {
    // Inform webpack that we are building a bundle for Node JS, rather than the browser
    target: 'node',


    // Tell webpack the root file of our server application
    entry: './src/index.js',


    // Tell webpack where to put the output file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    },


    // To auto refresh browser

    devServer: {
        contentBase: path.join(__dirname, './build'),
        compress: true,
        https: false,
        open: true,
        hot: true,
        port: 3000,
    },

}