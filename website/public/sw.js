/* eslint-env serviceworker */
const CACHE_NAME = 'ai-tools-v3';
const APP_SCOPE_URL = new URL(self.registration.scope);

function resolveAppUrl(path = '') {
  return new URL(String(path).replace(/^\/+/, ''), APP_SCOPE_URL).href;
}

const STATIC_ASSETS = [
  '',
  'index.html',
  'favicon.svg',
  'logo.svg',
  'manifest.json'
].map(resolveAppUrl);

// 安装时缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.error('Failed to cache static assets:', err);
      })
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('ai-tools-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳过非 GET 请求
  if (request.method !== 'GET') {
    return;
  }

  // 跳过跨域请求
  if (url.origin !== self.location.origin) {
    return;
  }

  // 导航请求 (history mode): 网络优先，确保 Vercel 始终返回最新 index.html
  if (request.mode === 'navigate') {
    event.respondWith(navigationNetworkFirst(request));
    return;
  }

  // 脚本和样式网络优先，避免内容目录更新后仍命中旧 chunk
  if (request.destination === 'style' ||
      request.destination === 'script') {
    event.respondWith(networkFirst(request));
    return;
  }

  // public/ 图片使用稳定 URL，先显示缓存并在后台刷新，避免长期命中旧图
  if (request.destination === 'image') {
    event.respondWith(staleWhileRevalidate(request, event));
    return;
  }

  // 字体缓存优先，减少重复下载
  if (request.destination === 'font') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // 网络优先策略 - API 请求
  const appApiPath = new URL('api/', APP_SCOPE_URL).pathname;
  if (url.pathname.startsWith(appApiPath) || url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // 默认策略 - 网络优先 (安全默认)
  event.respondWith(networkFirst(request));
});

// 缓存优先策略
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    return new Response('Network error', { status: 408 });
  }
}

async function navigationNetworkFirst(request) {
  const cache = await caches.open(CACHE_NAME);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    if (networkResponse.status !== 404) return networkResponse;
    return (
      await cache.match(resolveAppUrl('index.html')) ||
      await cache.match(resolveAppUrl('')) ||
      networkResponse
    );
  } catch {
    return (
      await cache.match(request) ||
      await cache.match(resolveAppUrl('index.html')) ||
      await cache.match(resolveAppUrl('')) ||
      new Response('Network error', { status: 408 })
    );
  }
}

// 先返回缓存，同时刷新缓存；首次请求仍等待网络
async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkRequest = fetch(request)
    .then(async (response) => {
      if (response.ok) {
        await cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    event.waitUntil(networkRequest);
    return cached;
  }

  const networkResponse = await networkRequest;
  return networkResponse || new Response('Network error', { status: 408 });
}

// 网络优先策略
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// 后台同步
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log('Background sync executed');
}

// 推送通知
self.addEventListener('push', (event) => {
  if (event.data) {
    let data;
    try {
      data = event.data.json();
    } catch {
      return;
    }
    event.waitUntil(
      self.registration.showNotification(data.title || 'AI工具全书', {
        body: data.body || '',
        icon: resolveAppUrl('icons/icon-192x192.svg'),
        badge: resolveAppUrl('icons/icon-192x192.svg'),
        tag: data.tag,
        requireInteraction: data.requireInteraction || false,
        actions: data.actions || []
      })
    );
  }
});

// 通知点击
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || resolveAppUrl(''))
  );
});
