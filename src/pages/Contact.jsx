import { useState, useEffect } from 'react'
import './Contact.css'
import Carousel from '../components/Carousel'
import { supabase } from '../supabaseClient'
import { FiMail, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const [intro, setIntro] = useState('')
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetchIntro()
    fetchContacts()
  }, [])

  const fetchIntro = async () => {
    const { data } = await supabase.from('contact_intro').select('*').single()
    if (data) setIntro(data.intro_text)
  }

  const fetchContacts = async () => {
    const { data } = await supabase.from('contacts').select('*')
    if (data) {
      const mappedContacts = data.map(contact => ({
        title: contact.type.charAt(0).toUpperCase() + contact.type.slice(1),
        description: contact.value,
        id: contact.id,
        icon: getIcon(contact.type),
        link: contact.value.startsWith('http') ? contact.value : `mailto:${contact.value}`
      }))
      setContacts(mappedContacts)
    }
  }

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'email': return <FiMail className="carousel-icon" />
      case 'github': return <FiGithub className="carousel-icon" />
      case 'instagram': return <FiInstagram className="carousel-icon" />
      case 'linkedin': return <FiLinkedin className="carousel-icon" />
      default: return <FiMail className="carousel-icon" />
    }
  }
  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          {intro || "I'd love to hear from you! Feel free to reach out through any of the platforms below."}
        </p>

        <div className="contact-content">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
