import React from 'react'
import './Navbar.css'

const Navbar = ({ activeSection, scrollToSection, setActiveSection, setIsScrolling }) => {
  // Smooth scroll with easing (same as hero buttons)
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId)
    if (!target) return

    setIsScrolling(true) // Prevent scroll detection during animation

    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1000 // 1 second smooth scroll
    let startTime = null

    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t * t + b
      t -= 2
      return c / 2 * (t * t * t + 2) + b
    }

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime

      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      } else {
        setIsScrolling(false) // Re-enable scroll detection after animation
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-wrap">
          <input
            type="radio"
            id="nav-home"
            name="nav"
            className="nav-radio nav-home"
            checked={activeSection === 'home'}
            onChange={() => { setActiveSection('home'); smoothScrollTo('home'); }}
          />
          <label htmlFor="nav-home" className="nav-label">
            <span>Home</span>
          </label>
          <input
            type="radio"
            id="nav-about"
            name="nav"
            className="nav-radio nav-about"
            checked={activeSection === 'about'}
            onChange={() => { setActiveSection('about'); smoothScrollTo('about'); }}
          />
          <label htmlFor="nav-about" className="nav-label">
            <span>About</span>
          </label>
          <input
            type="radio"
            id="nav-projects"
            name="nav"
            className="nav-radio nav-projects"
            checked={activeSection === 'projects'}
            onChange={() => { setActiveSection('projects'); smoothScrollTo('projects'); }}
          />
          <label htmlFor="nav-projects" className="nav-label">
            <span>Projects</span>
          </label>
          <input
            type="radio"
            id="nav-contact"
            name="nav"
            className="nav-radio nav-contact"
            checked={activeSection === 'contact'}
            onChange={() => { setActiveSection('contact'); smoothScrollTo('contact'); }}
          />
          <label htmlFor="nav-contact" className="nav-label">
            <span>Contact</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
