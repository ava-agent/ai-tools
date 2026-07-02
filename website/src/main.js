import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createLocalStoragePlugin } from './plugins/piniaLocalStorage'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth.js'
import { shouldRegisterServiceWorker } from './utils/serviceWorker.js'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
setActivePinia(pinia)

pinia.use(createLocalStoragePlugin({
  stores: ['gamification', 'achievements']
}))

app.use(pinia)
app.use(router)

// 先挂载应用，确保 App.vue 中的 watch 已注册
app.mount('#app')

// 挂载后初始化认证状态，auth 变化会触发 App.vue 中的 watcher
const authStore = useAuthStore()
authStore.initialize()

// 注册 Service Worker（PWA 支持）
if (shouldRegisterServiceWorker({
  hasServiceWorker: 'serviceWorker' in navigator,
  mode: import.meta.env.MODE
})) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`${import.meta.env.BASE_URL}sw.js`)
      .then((registration) => {
        // 监听更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 有新版本可用，可以在这里提示用户刷新页面
            }
          })
        })
      })
      .catch(() => {
        // SW registration failed silently
      })
  })
}

// 监听网络状态
window.addEventListener('online', () => {
  document.body.classList.remove('offline')
})

window.addEventListener('offline', () => {
  document.body.classList.add('offline')
})

// 检查当前网络状态
if (!navigator.onLine) {
  document.body.classList.add('offline')
}
