export function shouldRegisterServiceWorker({ hasServiceWorker, mode }) {
  return Boolean(hasServiceWorker && mode === 'production')
}
