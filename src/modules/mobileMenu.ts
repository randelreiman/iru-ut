export function initMobileMenu() {
  const button = document.getElementById('menu-nombtn')
  const menu = document.getElementById('mobile-menu')

  if (!button || !menu) return

  button.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')))
  })
}
