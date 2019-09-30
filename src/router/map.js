// get subRoutes
function requireSubRoutes (r) {
  const routes = []
  r.keys().forEach((key) => { Object.keys(r(key)).forEach((name) => { routes.push(...r(key)[name]) }) })
  return routes
}

// 深度搜索routes下的js文件
const autoInjectRoutes = requireSubRoutes(require.context('./routes/', true, /\.js$/))

export default [
  ...autoInjectRoutes
]
