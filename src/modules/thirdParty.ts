export function initThirdParty() {
  loadCookieYes()
  loadGTM()
}

/* ---------------- COOKIEYES ---------------- */
function loadCookieYes() {
  if (import.meta.env.VITE_ENABLE_COOKIES === 'false') return
  if (document.getElementById('cookieyes')) return

  const script = document.createElement('script')
  script.id = 'cookieyes'
  script.src = 'https://cdn-cookieyes.com/client_data/150523df78fc63d58a930192e7fa50e9/script.js'
  script.async = true

  document.head.appendChild(script)
}

/* ---------------- GTM ---------------- */
function loadGTM() {
  if (import.meta.env.VITE_ENABLE_GTM === 'false') return
  if (document.getElementById('gtm-script')) return

  const gtmId = 'GTM-WRFVFK5G'

  ;(window as any).dataLayer = (window as any).dataLayer || []
  ;(window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })

  const script = document.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`

  document.head.appendChild(script)
}
