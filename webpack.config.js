var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('postcss-cssnext'),
    postShort = require('postcss-short'),
    postSorting = require('postcss-sorting'),
    precss = require('precss'),
    Ex = require("extract-text-webpack-plugin"),
    postcssConfig = function() {
        return [cssnext({ browsers: ['last 2 versions', 'Android >= 2.1', 'iOS >= 7.0'] }), precss, postShort, postSorting];
    };

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.css$/,
            loader: Ex.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader' })
        }]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    postcss: postcssConfig,
    vue: {
        postcss : postcssConfig
    },
    devtool: '#eval-source-map',
    plugins: [
        new Ex('[name].css')
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}
