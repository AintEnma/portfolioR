import './About.css'
import TiltedCard from '../components/TiltedCard'
import meImg from '../img/me.jpg'

export default function About() {
  return (
    <div className="about">
      <section className="about-content">
        <div className="about-columns">
          <div className="about-text">
            <h2>I'm Rom - I grow through discipline, curiosity, and the pursuit of both knowledge and excellence.</h2>
            <p>
              I’ve spent my college years balancing two worlds: the fast-paced, demanding life of a student-athlete and the structured, ever-evolving field of Information Technology. 
              Training courts and computer labs may seem far apart, but they’ve shaped the same lessons in me—resilience, focus, and the drive to keep improving no matter how tough the challenge.
            </p>
            <p>
              Coming from La Consolacion University Philippines, I’ve learned that growth isn’t just measured by grades or game scores.
              It’s found in early mornings, late-night study sessions, team huddles, and those quiet moments when you push yourself to understand more—about systems, about people, and about who you want to become.
            </p>
          </div>
          <div className="about-image">
            <TiltedCard imageSrc={meImg} altText="Rom's photo" />
          </div>
        </div>

        <div className="skills-section">
          <h2>Tools that I use</h2>
          <div className="skills-list">
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png" alt="Figma" className="skill-icon" />
                <h3>Figma</h3>
              </div>
              <p>UI/UX design tool for creating interfaces and interactive prototypes.</p>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg" alt="Flutter" className="skill-icon" />
                <h3>Flutter</h3>
              </div>
              <p>Open-source framework for building cross-platform mobile applications.</p>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://godotengine.org/assets/press/logo_large_color_light.png" alt="Godot" className="skill-icon" />
                <h3>Godot</h3>
              </div>
              <p>Free and open-source game engine for 2D and 3D game development.</p>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://netbeans.apache.org/_/images/apache-netbeans.svg" alt="NetBeans" className="skill-icon" />
                <h3>NetBeans</h3>
              </div>
              <p>Integrated development environment primarily for Java development.</p>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png" alt="PyCharm" className="skill-icon" />
                <h3>PyCharm</h3>
              </div>
              <p>IDE specifically designed for Python programming and development.</p>
            </div>
            <div className="skill-category">
              <div className="skill-header">
                <img src="https://visualstudio.microsoft.com/wp-content/uploads/2021/10/Product-Icon.svg" alt="Visual Studio" className="skill-icon" />
                <h3>Visual Studio</h3>
              </div>
              <p>Powerful IDE for developing applications in various languages, especially C# and .NET.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
