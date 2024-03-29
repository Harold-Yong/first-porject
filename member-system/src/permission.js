/*
权限校验：
通过router路由前置钩子函数 beforeEach() ，
在跳转路由前进行拦截判断是否已经登录，
如果已登录，则进行路由跳转，如果没有则回到登录页
*/
import router from './router'
import {getUserInfo} from './api/login'
/*
前置路由钩子函数
to ：即将要进入的目标路由对象
from ：当前导航正要离开的路由对象
next : 调用该方法，进入目标路由
*/
router.beforeEach((to, from, next) => {
  // 获取 token
  const token = localStorage.getItem('mxg-msm-token')
  // 没有 token
  if (!token) {
    // 不允许访问其他路由, 回到登录页
    if (to.path !== '/login') {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    // 有 token
    if (to.path === '/login') {
      // 进入目标路由
      next()
    } else {
      // 有token, 看下是否有用户信息
      const userInfo = localStorage.getItem('mxg-msm-user')
      if (userInfo) {
        // 有信息, 进入目标路由
        next()
      } else {
        // 通过token获取用户信息
        getUserInfo(token).then((response) => {
          const resp = response.data
          console.log('prer', resp)
          if (resp.flag) {
            // 获取到, 保存数据
            localStorage.setItem('mxg-msm-user', JSON.stringify(resp.data))
            next()
          } else {
            // 未获取到,重新登录
            next({
              path: '/login'
            })
          }
        })
      }
    }
  }
})