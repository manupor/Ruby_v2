// Client-side chunk load error recovery
// Automatically reloads the page once if a chunk fails to load
// This prevents users from seeing "ChunkLoadError" after deployments
'use client'

if (typeof window !== 'undefined') {
  // Helper to track if we've already reloaded for this error
  const hasReloaded = (key: string): boolean => {
    const reloaded = sessionStorage.getItem(key)
    sessionStorage.setItem(key, '1')
    return !!reloaded
  }

  // Listen for chunk load errors
  window.addEventListener('error', (event: ErrorEvent) => {
    const message = event?.message || ''
    
    // Check if this is a chunk load error
    if (/ChunkLoadError|Loading chunk \d+ failed/i.test(message)) {
      // Only reload once per session to avoid infinite loops
      if (!hasReloaded('rw-chunk-reload')) {
        console.warn('🔄 Chunk load failed, reloading page...')
        location.reload()
      } else {
        console.error('⚠️ Chunk load failed after reload. Please clear cache.')
      }
    }
  })

  // Also catch dynamic import errors
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const reason = event?.reason
    if (reason && typeof reason === 'object') {
      const message = reason.message || ''
      if (/ChunkLoadError|Loading chunk \d+ failed/i.test(message)) {
        if (!hasReloaded('rw-chunk-reload')) {
          console.warn('🔄 Chunk load failed (promise), reloading page...')
          location.reload()
        }
      }
    }
  })
}
