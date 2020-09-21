// style-loader
// 暗号：可以做，但没必要
module.exports = function(source) {
    return `
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    style.innerHTML = ${source}
    head.appendChild(style)
    `
}