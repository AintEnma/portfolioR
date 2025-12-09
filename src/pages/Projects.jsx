import './Projects.css'

export default function Projects() {
  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on</p>
      </section>

      <section className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Description of project 3</p>
        </div>
      </section>
    </div>
  )
}
