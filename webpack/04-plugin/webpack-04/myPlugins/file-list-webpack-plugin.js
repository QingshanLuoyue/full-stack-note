// 暗号：做人嘛，最重要的是开心
class fileListWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('fileWebpackPlugin', (compilation, cb) => {
            // 打包文件数量
            const len = Object.keys(compilation.assets).length
            let content = `文件的数量：${len}\n\n`

            // 打包各个文件名
            for (let filename in compilation.assets) {
                content += filename + '\n'
            }

            // 文件清单
            compilation.assets['fileList.txt'] = {
                source: function () {
                    return `${content}`
                },
                size: function () {
                    return 1024
                },
            }
            cb()
        })
    }
}
module.exports = fileListWebpackPlugin
