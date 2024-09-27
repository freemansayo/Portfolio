import React from 'react';
import styles from './Skills.module.css';
import skillsData from '../../../../skills.json'; // Import the JSON file

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <h2 className={styles.label}>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
