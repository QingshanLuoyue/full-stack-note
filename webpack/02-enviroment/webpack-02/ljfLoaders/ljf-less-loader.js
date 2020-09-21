// less-loader
// 暗号：可以做，但没必要
const less = require('less')

module.exports = function(source) {
    // less 模块解析 less 语法，转换成 css 字符串
    less.render(source, (e, output) => {
        this.callback(e, output.css)
    })
}