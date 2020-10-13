const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const { transformFromAst } = require('@babel/core')
module.exports = class webpack {
    constructor(options) {
        this.entry = options.entry
        this.output = options.output
        this.modules = []
    }
    run() {
        const info = this.parse(this.entry)
        //递归处理所有依赖
        console.log(info)
        this.modules.push(info)
        for (let i = 0; i < this.modules.length; i++) {
            const item = this.modules[i]
            const { dependencies } = item
            if (dependencies) {
                for (let j in dependencies) {
                    this.modules.push(this.parse(dependencies[j]))
                }
            }
        }
        // 修改数据结构 数组转对象
        const obj = {}
        this.modules.forEach((item) => {
            obj[item.entryFile] = {
                dependencies: item.dependencies,
                code: item.code,
            }
        })
        console.log(obj)
        // 代码生成，文件生成
        this.file(obj)
    }

// 暗号：有点感动了怎么办？

// 解析模块文件函数
parse(entryFile) {
    // 根据文件路径，读取文件内容
    const content = fs.readFileSync(entryFile, 'utf8')

    // 将文件内容，使用 babel 的 parser 工具，以 module 形式来解析
    // 生成语法树
    const ast = parser.parse(content, {
        sourceType: 'module',
    })

    const dependencies = {}
    // 使用 babel 的 traverse 工具，遍历语法树
    traverse(ast, {
        // 遇到引入模块的语法树时候的处理函数
        ImportDeclaration({ node }) {
            // 处理当前模块的依赖
            // 构造和当前路径一样的前缀路径，方便后面 require 加载
            path.dirname() //./src/index.js
            const newPathName = './' + path.join(path.dirname(entryFile), node.source.value)
            dependencies[node.source.value] = newPathName
        },
    })

    // 使用 preset-env 处理 ast 语法树，进行语法降级
    // 拿到降级后的 代码
    const { code } = transformFromAst(ast, null, {
        presets: ['@babel/preset-env'],
    })

    // 最后返回： 
    // 入口文件
    // 当前文件的依赖
    // 当前文件代码降级后的代码
    return {
        entryFile,
        dependencies,
        code,
    }
}
    file(code) {
        const filePath = path.join(this.output.path, this.output.filename)
        const newCode = JSON.stringify(code)
        // 生成 bundle代码
        const bundle = `(function(modules){
        function require(module){
            function newRequire(relativePath){
              return require(modules[module].dependencies[relativePath])
            }    
            var exports = {};
            (function(require,exports,code){
                eval(code)
            })(newRequire,exports,modules[module].code)
            return exports;
        }
        require('${this.entry}')
    })(${newCode})`
        fs.writeFileSync(filePath, bundle, 'utf-8')
    }
}
