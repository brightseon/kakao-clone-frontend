const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;

const config = {
    mode : 'development',
    entry : path.join(__dirname, '/src/index.tsx'),
    output : {
        filename : 'bundle.[hash].js',
        path : path.join(__dirname, '/dist')
    },
    resolve : {
        extensions : ['.js', '.json', '.ts', '.tsx']
    },
    devtool : 'inline-source-map',
    module : {
        rules : [
            {
                test : /\.(ts|tsx)$/,
                exclude : /node_modules/,
                use : ['ts-loader']
            },
            {
                test : /\.(css)$/,
                use : [
                    { loader : 'style-loader' },
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true,
                            sourceMap : true
                        }
                    }
                ]
            },
            {
                test : /\.(jpg|png|svg|ico|icns)$/,
                loader : 'file-loader',
                options : {
                    name : '[path][name].[ext]'
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'public/index.html',
            // favicon : 'public/favicon.ico'
        })
    ],
    devServer : {
        host : 'localhost',
        port : PORT,
        historyApiFallback : true,
        open : true
    }
};

module.exports = config; 