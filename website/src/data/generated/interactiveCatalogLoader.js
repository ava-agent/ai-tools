// Generated loader for the deferred quiz catalog.
export function loadInteractiveCatalog() {
  return import('./interactiveCatalog.js').then((module) => module.interactiveCatalog)
}
