import './styles.css'

const button = document.getElementById('menu-btn')
const menu = document.getElementById('mobile-menu')

if (button && menu) {
  button.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    button.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')))

    // For smooth height animation
    /*  if (menu.style.maxHeight) {
      menu.style.maxHeight = ''
    } else {
      menu.style.maxHeight = menu.scrollHeight + 'px'
    } */
  })
}

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('nav a')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id')

        navLinks.forEach((link) => {
          link.classList.remove('text-blue-600')

          if (link.getAttribute('href') === `/#${id}`) {
            link.classList.add('text-blue-600')
          }
        })
      }
    })
  },
  {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }
)

sections.forEach((section) => observer.observe(section))

const backToTop = document.getElementById('backToTop')

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop?.classList.remove('opacity-0', 'pointer-events-none')
  } else {
    backToTop?.classList.add('opacity-0', 'pointer-events-none')
  }
})

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
