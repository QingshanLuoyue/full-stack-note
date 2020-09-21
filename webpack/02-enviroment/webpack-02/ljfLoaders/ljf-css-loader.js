// css-loader
// 暗号：可以做，但没必要
module.exports = function(source) {
    // 此处的 source 并非字符串，需要用 JSON.stringify 序列化
    return JSON.stringify(source)
}