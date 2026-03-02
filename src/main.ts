import './styles.css'

const button = document.getElementById('menu-btn')
const menu = document.getElementById('mobile-menu')

if (button && menu) {
  button.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')

    menu.classList.toggle('hidden')
    button.setAttribute('aria-expanded', String(!isOpen))
    if (menu.style.maxHeight) {
    menu.style.maxHeight = ''
  } else {
    menu.style.maxHeight = menu.scrollHeight + 'px'
  }
  })
}

const currentPage = document.body.dataset.page

document.querySelectorAll('nav a').forEach(link => {
  if (
    (currentPage === 'home' && link.getAttribute('href') === '/') ||
    (currentPage === 'services' && link.getAttribute('href') === '/services.html') ||
    (currentPage === 'contact' && link.getAttribute('href') === '/contact.html')
  ) {
    link.classList.add('text-blue-600')
  }
})

