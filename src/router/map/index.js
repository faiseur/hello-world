// import '../../'
export default [
  {
    path: '/',
    title: '首页',
    name: 'menu',
    component: () => import('views/main'),
    children:
    [   
        {
          path: '/login',
          title: '登陆',
          name: 'login',
          component: () => import('views/login')
        },
        {
          path: '/regist',
          title: '注册',
          name: 'regist',
          component: () => import('views/regist')
        }
        
    ]
  }
 
]