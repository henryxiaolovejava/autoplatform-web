import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import Layout from '@/module-dashboard/pages/layout'

// 定义
const _import = require('./import_' + process.env.NODE_ENV) // 懒加载 导包
const whiteList = ['/login', '/reg', '/authredirect', '/dashboard'] // 白名单 无需跳转

// 配置
Vue.use(Router)
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

export const constantRouterMap = [{
    path: '/login',
    component: _import('dashboard/pages/login'),
    hidden: true
  },

  {
    path: '/reg',
    component: _import('dashboard/pages/reg'),
    hidden: true
  },
  {
    path: '/404',
    component: _import('dashboard/pages/404'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'login',
    children: [{
        path: 'dashboard',
        component: _import('dashboard/pages/dashboard'),
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          noCache: true
        }
      },
      {
        path: 'login',
        component: _import('dashboard/pages/login'),
        name: 'login',
        meta: {
          noCache: true
        }
      },
      {
        path: 'personalCenter',
        component: _import('dashboard/pages/personalCenter'),
        name: '个人中心',
        meta: {
          title: '个人中心',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    redirect: '',
    children: [{
      path: 'taskList',
      component: _import('task-manager/pages/index'),
      name: '任务列表',
      meta: {
        title: '任务列表',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  {
    path: '/case-manager',
    component: Layout,
    redirect: '',
    children: [{
      path: 'caseSuiteList',
      component: _import('case-manager/pages/index'),
      name: '用例集列表',
      meta: {
        title: '用例集列表',
        icon: 'dashboard',
        noCache: true
      }
    }, {
      path: 'caseList',
      component: _import('case-manager/pages/caseList'),
      name: '用例列表',
      meta: {
        title: '用例列表',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  {
    path: '/report-manager',
    component: Layout,
    redirect: '',
    children: [{
        path: 'reportList',
        component: _import('report-manager/pages/index'),
        name: '报告管理',
        meta: {
          title: '报告管理',
          icon: 'dashboard',
          noCache: true
        }
      },
      {
        path: 'emailList',
        component: _import('report-manager/pages/email'),
        name: '邮件列表',
        meta: {
          title: '邮件列表',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '',
    children: [{
      path: 'userCenter',
      component: _import('user-manager/pages/index'),
      name: '用户管理',
      meta: {
        title: '用户管理',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  {
    path: '/press',
    component: Layout,
    redirect: '',
    children: [{
        path: 'pressConfig',
        component: _import('press-manager/pages/index'),
        name: '压测配置',
        meta: {
          title: '压测配置',
          icon: 'dashboard',
          noCache: true
        }
      },
      {
        path: 'pressReport',
        component: _import('press-manager/pages/report'),
        name: '压测报告',
        meta: {
          title: '压测报告',
          icon: 'dashboard',
          noCache: true
        }
      }
    ]
  }, {
    path: '/board',
    component: Layout,
    redirect: '',
    children: [{
      path: 'boardManager',
      component: _import('board-manager/pages/index'),
      name: '看板管理',
      meta: {
        title: '看板管理',
        icon: 'dashboard',
        noCache: true
      }
    }]
  }
]

/**
 * 配置路由
 **/
let router = new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// 路由拦截器
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    // 在免登录白名单，直接进入
    next()
  } else {
    // 若路径不在白名单中则跳转到登录页
    next()
    NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  }
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * 导出 基础路由
 **/
export default router

/**
 * 导出 业务路由
 **/
export let asyncRouterMap = [{
  path: '*',
  redirect: '/404',
  hidden: true
}]
