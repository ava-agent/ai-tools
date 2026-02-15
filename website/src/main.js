import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createLocalStoragePlugin } from './plugins/piniaLocalStorage'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(createLocalStoragePlugin({
  stores: ['gamification', 'achievements']
}))

app.use(pinia)
app.use(router)
app.mount('#app')

// 注册 Service Worker（PWA 支持）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration.scope)
        
        // 监听更新
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 有新版本可用
              console.log('New version available')
              // 可以在这里提示用户刷新页面
            }
          })
        })
      })
      .catch((error) => {
        console.log('SW registration failed:', error)
      })
  })
}

// 监听网络状态
window.addEventListener('online', () => {
  console.log('Application is online')
  document.body.classList.remove('offline')
})

window.addEventListener('offline', () => {
  console.log('Application is offline')
  document.body.classList.add('offline')
})

// 检查当前网络状态
if (!navigator.onLine) {
  document.body.classList.add('offline')
}
