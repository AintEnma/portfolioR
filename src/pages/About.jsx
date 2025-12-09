import { useState, useEffect } from 'react'
import './About.css'
import TiltedCard from '../components/TiltedCard'
import meImg from '../img/me.jpg'
import { supabase } from '../supabaseClient'

export default function About() {
  const [about, setAbout] = useState({ title: '', content: '' })
  const [tools, setTools] = useState([])

  useEffect(() => {
    fetchAbout()
    fetchTools()
  }, [])

  const fetchAbout = async () => {
    const { data } = await supabase.from('about').select('*').single()
    if (data) setAbout(data)
  }

  const fetchTools = async () => {
    const { data } = await supabase.from('tools').select('*')
    setTools(data || [])
  }
  return (
    <div className="about">
      <section className="about-content">
        <div className="about-columns">
          <div className="about-text">
            <h2>{about.title || "About Me"}</h2>
            <p>{about.content || "Loading..."}</p>
          </div>
          <div className="about-image">
            <TiltedCard imageSrc={meImg} altText="Rom's photo" />
          </div>
        </div>

        <div className="skills-section">
          <h2>Tools that I use</h2>
          <div className="skills-list">
            {tools.length > 0 ? tools.map((tool) => (
              <div key={tool.id} className="skill-category">
                <div className="skill-header">
                  <img src={tool.icon_url} alt={tool.name} className="skill-icon" />
                  <h3>{tool.name}</h3>
                </div>
                <p>{tool.description}</p>
              </div>
            )) : (
              <p>Loading tools...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
