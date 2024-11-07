import React from 'react'
import project from "../../../project.json"
import ProjectCard from './ProjectCard'
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>
          Projects
        </h2>
        <div className={styles.projects}> 
          {project.map((project,id) => {
            return (
               <ProjectCard key={id} project={project}/> 
            )

          })}
        </div>
            
    </section>
  )
}

export default Projects

