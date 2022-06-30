import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e2f762b = () => interopDefault(import('..\\pages\\about\\about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _31a2d131 = () => interopDefault(import('..\\pages\\about\\about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _5739485d = () => interopDefault(import('..\\pages\\blog-details\\blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _29d3453f = () => interopDefault(import('..\\pages\\blog-details\\blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _7fa8522b = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _0f457531 = () => interopDefault(import('..\\pages\\blog-grid\\blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _5390b92b = () => interopDefault(import('..\\pages\\blog-list\\blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _8f2c239e = () => interopDefault(import('..\\pages\\blog-list\\blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _43b4e572 = () => interopDefault(import('..\\pages\\blog\\blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _ff20c4d6 = () => interopDefault(import('..\\pages\\blog\\blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _76c3d4ea = () => interopDefault(import('..\\pages\\contact\\contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _69081dd1 = () => interopDefault(import('..\\pages\\contact\\contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _36b70632 = () => interopDefault(import('..\\pages\\homepage\\home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _49cea1f5 = () => interopDefault(import('..\\pages\\homepage\\home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _4e2423f4 = () => interopDefault(import('..\\pages\\homepage\\home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _42995694 = () => interopDefault(import('..\\pages\\homepage\\home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _659141b6 = () => interopDefault(import('..\\pages\\homepage\\home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _73980777 = () => interopDefault(import('..\\pages\\homepage\\home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _7cfe5f78 = () => interopDefault(import('..\\pages\\homepage\\home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _087cba38 = () => interopDefault(import('..\\pages\\homepage\\home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _946b7d3a = () => interopDefault(import('..\\pages\\homepage\\home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _c53d260e = () => interopDefault(import('..\\pages\\homepage\\home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _abd89afc = () => interopDefault(import('..\\pages\\homepage\\home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _32461fba = () => interopDefault(import('..\\pages\\homepage\\home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _c345b8be = () => interopDefault(import('..\\pages\\homepage\\home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _71aa5b0a = () => interopDefault(import('..\\pages\\homepage\\home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _dab2d680 = () => interopDefault(import('..\\pages\\homepage\\home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _5c0f853c = () => interopDefault(import('..\\pages\\homepage\\home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _cd5c487a = () => interopDefault(import('..\\pages\\project-details2\\project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _2acd1e99 = () => interopDefault(import('..\\pages\\project-details2\\project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _b616de9e = () => interopDefault(import('..\\pages\\showcase\\showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _d8fdf12a = () => interopDefault(import('..\\pages\\showcase\\showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _7e34f2aa = () => interopDefault(import('..\\pages\\showcase2\\showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _14a25e9e = () => interopDefault(import('..\\pages\\showcase2\\showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _7c70256a = () => interopDefault(import('..\\pages\\showcase3\\showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _11193e11 = () => interopDefault(import('..\\pages\\showcase3\\showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _48c20fcb = () => interopDefault(import('..\\pages\\works\\works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _69636b91 = () => interopDefault(import('..\\pages\\works\\works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _1dbfc8ab = () => interopDefault(import('..\\pages\\works2\\works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _341cceb1 = () => interopDefault(import('..\\pages\\works2\\works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _52c9c82e = () => interopDefault(import('..\\pages\\works3\\works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _d2a8399a = () => interopDefault(import('..\\pages\\works3\\works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _3015138c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2e2f762b,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _31a2d131,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _5739485d,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _29d3453f,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _7fa8522b,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _0f457531,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _5390b92b,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _8f2c239e,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _43b4e572,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _ff20c4d6,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _76c3d4ea,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _69081dd1,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _36b70632,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _49cea1f5,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _4e2423f4,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _42995694,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _659141b6,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _73980777,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _7cfe5f78,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _087cba38,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _946b7d3a,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _c53d260e,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _abd89afc,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _32461fba,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _c345b8be,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _71aa5b0a,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _dab2d680,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _5c0f853c,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _cd5c487a,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _2acd1e99,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _b616de9e,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _d8fdf12a,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _7e34f2aa,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _14a25e9e,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _7c70256a,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _11193e11,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _48c20fcb,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _69636b91,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _1dbfc8ab,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _341cceb1,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _52c9c82e,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _d2a8399a,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _3015138c,
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
