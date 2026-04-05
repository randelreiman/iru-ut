export function initMobileMenu() {
  const button = document.getElementById('menu-btn')
  const menu = document.getElementById('mobile-menu')

  if (!button || !menu) return

  // Start closed
  menu.style.maxHeight = '0px'

  button.addEventListener('click', () => {
    const isOpen = menu.style.maxHeight !== '0px'

    if (isOpen) {
      menu.style.maxHeight = '0px'
    } else {
      menu.style.maxHeight = menu.scrollHeight + 'px'
    }

    button.setAttribute('aria-expanded', String(!isOpen))
  })

  // Optional: close when clicking link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.style.maxHeight = '0px'
      button.setAttribute('aria-expanded', 'false')
    })
  })
}
