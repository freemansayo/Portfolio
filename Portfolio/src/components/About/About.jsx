import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <div className={styles.text}>

        <h2 className={styles.title}>About Me</h2>
        <p className={styles.paragraph}>
            I am a passionate computer engineering student from Queen's University with an interest in . I cofounded the first cryptography and cybersecurity club at my University. In my free time, I enjoy
            powerlifting, cooking and.
          </p>
      </div>
        <div className={styles.imageContainer}>
        <img src='../assets/hero/PortfolioPic.png' alt="Your Name" className={styles.image} />
        </div>
    </div>
    
  </section>
  )
}

export default About
