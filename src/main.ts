import App from './App.vue'
import { routes } from './routes.js'
import { ViteSSG } from 'vite-ssg'
import './styles/main.css'
import NProgress from 'nprogress'

// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, isClient }) => {
    // install plugins etc.
    if (isClient) {
      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
)
