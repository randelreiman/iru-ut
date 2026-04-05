import './styles.css'

import { initMobileMenu } from './modules/mobileMenu.ts'
import { initSectionObserver } from './modules/sectionObserver.ts'
import { initBackToTop } from './modules/backToTop.ts'
import { initSlider } from './modules/slider.ts'
import { initThirdParty } from './modules/thirdParty.ts'

function initApp() {
  initMobileMenu()
  initSectionObserver()
  initBackToTop()
  initSlider()

  // Delay third-party scripts for performance
  setTimeout(initThirdParty, 500)
}

document.addEventListener('DOMContentLoaded', initApp)
