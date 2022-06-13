import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _93258d70 = () => interopDefault(import('../pages/about/about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _9dc51c98 = () => interopDefault(import('../pages/about/about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _f1996978 = () => interopDefault(import('../pages/blog-details/blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _0dccc190 = () => interopDefault(import('../pages/blog-details/blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _83895f80 = () => interopDefault(import('../pages/blog-grid/blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _b9db8c88 = () => interopDefault(import('../pages/blog-grid/blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _3125cce0 = () => interopDefault(import('../pages/blog-list/blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _bfcccb28 = () => interopDefault(import('../pages/blog-list/blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _4ae7e064 = () => interopDefault(import('../pages/blog/blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _a810a3d0 = () => interopDefault(import('../pages/blog/blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _1e35fd3c = () => interopDefault(import('../pages/contact/contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _74c2a64c = () => interopDefault(import('../pages/contact/contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _0080b752 = () => interopDefault(import('../pages/homepage/home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _ad0c962c = () => interopDefault(import('../pages/homepage/home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _166baf1e = () => interopDefault(import('../pages/homepage/home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _3e5e67ab = () => interopDefault(import('../pages/homepage/home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _2dd8cce0 = () => interopDefault(import('../pages/homepage/home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _5979cb28 = () => interopDefault(import('../pages/homepage/home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _4545eaa2 = () => interopDefault(import('../pages/homepage/home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _6827cd2d = () => interopDefault(import('../pages/homepage/home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _5cb30864 = () => interopDefault(import('../pages/homepage/home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _05e70024 = () => interopDefault(import('../pages/homepage/home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _74202626 = () => interopDefault(import('../pages/homepage/home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _dc1d9aa2 = () => interopDefault(import('../pages/homepage/home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _8b8d43e8 = () => interopDefault(import('../pages/homepage/home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _26d5e570 = () => interopDefault(import('../pages/homepage/home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _a2fa61aa = () => interopDefault(import('../pages/homepage/home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _888acf9e = () => interopDefault(import('../pages/homepage/home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _185fffa4 = () => interopDefault(import('../pages/project-details2/project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _e4f91250 = () => interopDefault(import('../pages/project-details2/project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _76c8d684 = () => interopDefault(import('../pages/showcase/showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _07950810 = () => interopDefault(import('../pages/showcase/showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _0fca3f18 = () => interopDefault(import('../pages/showcase2/showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _f93db438 = () => interopDefault(import('../pages/showcase2/showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _2894f2d4 = () => interopDefault(import('../pages/showcase3/showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _24dece26 = () => interopDefault(import('../pages/showcase3/showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _2d10e45e = () => interopDefault(import('../pages/works/works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _0eef295e = () => interopDefault(import('../pages/works/works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _96171138 = () => interopDefault(import('../pages/works2/works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _f90411d0 = () => interopDefault(import('../pages/works2/works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _0c3072f8 = () => interopDefault(import('../pages/works3/works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _4616e810 = () => interopDefault(import('../pages/works3/works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _9c72979c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about/about-dark",
    component: _93258d70,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _9dc51c98,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _f1996978,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _0dccc190,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _83895f80,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _b9db8c88,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _3125cce0,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _bfcccb28,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _4ae7e064,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _a810a3d0,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _1e35fd3c,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _74c2a64c,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _0080b752,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _ad0c962c,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _166baf1e,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _3e5e67ab,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _2dd8cce0,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _5979cb28,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _4545eaa2,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _6827cd2d,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _5cb30864,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _05e70024,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _74202626,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _dc1d9aa2,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _8b8d43e8,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _26d5e570,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _a2fa61aa,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _888acf9e,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _185fffa4,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _e4f91250,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _76c8d684,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _07950810,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _0fca3f18,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _f93db438,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _2894f2d4,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _24dece26,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _2d10e45e,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _0eef295e,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _96171138,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _f90411d0,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _0c3072f8,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _4616e810,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _9c72979c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
