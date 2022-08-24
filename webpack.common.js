const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
                test: /\.css$/i,
            },
        ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] },
    plugins: [
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, 'src', 'assets'),
        //             to: path.resolve(__dirname, 'dist'),
        //         },
        //     ],
        // }),
        ...getHtmlPlugins(['index']),
    ],
    entry: {
        index: path.resolve(__dirname, 'src', 'index.tsx'),
    },
    output: {
        filename: '[name].js',
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlPlugin({
                title: 'React todo app v3',
                filename: `${chunk}.html`,
                chunks: [chunk],
            }),
    );
}
