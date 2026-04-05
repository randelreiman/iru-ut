export function initSlider() {
  let currentIndex = 0

  const slides = document.getElementById('slides') as HTMLElement | null
  const prevBtn = document.getElementById('prevBtn')
  const nextBtn = document.getElementById('nextBtn')

  if (!slides || !prevBtn || !nextBtn) return

  const totalSlides = slides.children.length

  const updateSlide = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides
    updateSlide()
  })

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    updateSlide()
  })
}
