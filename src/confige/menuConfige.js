function formatObj (obj, parentUrl = '') {
  const {
    children: sub,
    meta,
    path: url
  } = obj
  return {
    nodeId: parentUrl ? `${parentUrl}/${url}` : url,
    name: meta ? (meta.menuTitle || meta.title) : '未命名',
    url: parentUrl ? `${parentUrl}/${url}` : url,
    children: (sub && sub.length) ? sub.filter(_ => !_.notShowInMenu).map(_ => formatObj(_, url)) : []
  }
}
// 深度搜索router/routes/下所有js文件
const s = require.context('@/router/routes/', true, /\.js$/)
// 将所有路由map变成一个数组并清楚不在菜单中显示的项
const routes = s.keys().reduce((tempArr, v) => tempArr.concat(s(v).default.filter(_ => !_.notShowInMenu)), [])
// 遍历得到menuConfig
const menuConfig = routes.map(v => formatObj(v))

export default menuConfig
