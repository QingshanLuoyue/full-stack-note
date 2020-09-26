class fileWebpackPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("fileWebpackPlugin", (compilation, cb) => {
      //
      const len = Object.keys(compilation.assets).length;
      let content = `文件的数量：${len}`;
      for (let filename in compilation.assets) {
        content += console.log(filename);
      }

      console.log(compilation.assets);
      compilation.assets["file.txt"] = {
        source: function () {
          return "hello webpack第四节课";
        },
        size: function () {
          return 1024;
        },
      };
      cb();
    });
  }
}

module.exports = fileWebpackPlugin;
