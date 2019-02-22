const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    const reactCDNSpecifier = env.ENVIRONMENT == 'development' ? 'development' : 'production.min';

    return {
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        optimization: {
            minimizer: [new UglifyJsPlugin()]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                REACT_CDN: `https://unpkg.com/react@16/umd/react.${reactCDNSpecifier}.js`,
                REACT_DOM_CDN: `https://unpkg.com/react-dom@16/umd/react-dom.${reactCDNSpecifier}.js`
            })
        ],
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        },
        mode: "development"
    };
};
