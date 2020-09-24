const path = require('path')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const glob = require('glob')
// entry: {
//   index: "./src/index.js",
//   list: "./src/list.js",
//   detail: "./src/detail.js",
//   login: "./src/login.js",
// },

// new htmlWebpackPlugin({
//       template: "./src/index.html",
//       filename: "index.html",
//       chunks: ["main"],
//     }),

// 暗号：等价交换，炼金术不变的原则
// 目录结构为
// dist
// public(各页面相应模板)
//     pagename1
//         index.html
//     pagename2
//         index.html
// src(源码目录)
//     assets(资源目录)
//         images
//         style
//     pages(页面目录)
//         pagename1
//             index.js
//         pagename2
//             index.js
const setMpa = () => {
    const entry = {}
    const htmlWebpackPlugins = []
    // 在 src/pages 目录下，寻找多页面入口，生成entry
    const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'))

    // 遍历入口
    entryFiles.map((item, index) => {
        const entryFile = item
        // 获取页面名
        const match = entryFile.match(/src\/pages\/(.*)\/index\.js$/)
        const pageName = match[1]

        // 组合 webpack 入口配置
        entry[pageName] = entryFile

        // 组合 htmlWebpackPlugins,用来生成多个页面
        htmlWebpackPlugins.push(
            new htmlWebpackPlugin({
                // 静态页面模板使用 public 中相应的目录页面模板
                template: path.join(__dirname, `./public/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: [pageName],
            })
        )
    })
    return {
        entry,
        htmlWebpackPlugins,
    }
}

const { entry, htmlWebpackPlugins } = setMpa()

module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]-[hash:6].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    // miniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 2048,
                    },
                },
            },
            {
                test: /\.woff2$/,
                use: 'file-loader',
            },
        ],
    },
    resolveLoader: {
        modules: ['./node_modules', './myLoaders'],
    },
    devtool: 'inline-source-map',
    plugins: [
        ...htmlWebpackPlugins,
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename: 'css/index-[contenthash:6].css',
        }),
    ],
}
