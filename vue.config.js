
module.exports = {
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./example/src/main.js')
      .end()
    config.plugin('html')
      .tap(args => {
        args[0].template = './example/public/index.html'
        return args
      })
      .end()
  },
  lintOnSave: true
}
