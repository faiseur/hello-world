export default [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('views/main'),
    children:
    [
      {
        path: '/user',
        meta: {
          title: '用户'
        },
        component: () => import('views/user'),
        children:
        [
          {
            path: '/user/manageuser',
            meta: {
              title: '用户管理'
            },
            component: () => import('views/user/manageuser')
          }
        ]
      }
    ]
  },
  
  
  {
    path: '/login',
    title: '登陆',
    component: () => import('views/login')
  },
  {
    path: '/regist',
    title: '注册',
    component: () => import('views/regist')
  }
]