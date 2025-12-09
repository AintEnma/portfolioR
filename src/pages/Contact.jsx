import './Contact.css'
import Carousel from '../components/Carousel'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'd love to hear from you! Feel free to reach out through any of the platforms below.
        </p>

        <div className="contact-content">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
