export function initSectionObserver() {
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a')

  if (!sections.length || !navLinks.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const id = entry.target.id

        navLinks.forEach((link) => {
          link.classList.remove('text-blue-600')

          if (link.getAttribute('href') === `/#${id}`) {
            link.classList.add('text-blue-600')
          }
        })
      })
    },
    {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }
  )

  sections.forEach((section) => observer.observe(section))
}
