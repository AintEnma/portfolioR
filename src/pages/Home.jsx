import DecryptedText from '../components/DecryptedText'
import './Home.css'
import QuoteCard from '../components/QuoteCard'

export default function Home() {
  // Smooth scroll with easing (same as navbar)
  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId)
    if (!target) return

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
      }
    }

    requestAnimationFrame(animation)
  }

  const handleButtonClick = (e, sectionId) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
  }
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <DecryptedText
            text="Rom Denielle Navarro"
            animateOn="view"
            useOriginalCharsOnly={false}
            className="decrypted-visible"
            encryptedClassName="decrypted-hidden"
            revealDirection="center"
          />
          <p className="subtitle">Aspiring designer passionate about creating thoughtful, user-centered visual solutions. Currently exploring design, and the craft of turning ideas into meaningful experiences.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleButtonClick(e, 'projects')}>
              View My Work
            </a>
            <a href="#about" className="btn btn-secondary" onClick={(e) => handleButtonClick(e, 'about')}>
              Learn More
            </a>
          </div>
        </div>

        
      </section>

    </div>
  )
}
