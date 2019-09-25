const fs = require('fs')
const path = require('path')
// 将src下的文件夹的名字都设为alias
function aliasProvider () {
  const aliasObj = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': path.join(__dirname, 'src'),
    'src': path.join(__dirname, 'src')
  }
  fs.readdirSync(path.join(__dirname, 'src'))
    .filter(fileName => fs.lstatSync(path.join(__dirname, 'src', fileName)).isDirectory())
    .forEach(fileName => {
      aliasObj[fileName] = path.join(__dirname, 'src', fileName)
    })
  return aliasObj
}
const alias = aliasProvider()
module.exports = {
  // 修改output.publicPath
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/',
  chainWebpack (config) {
    // alias
    Object.keys(alias).forEach(key => {
      config.resolve.alias.set(key, alias[key])
    })
  }
}
