export function initBackToTop() {
  const backToTop = document.getElementById('backToTop')
  if (!backToTop) return

  window.addEventListener('scroll', () => {
    const visible = window.scrollY > 400

    backToTop.classList.toggle('opacity-0', !visible)
    backToTop.classList.toggle('pointer-events-none', !visible)
  })

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
