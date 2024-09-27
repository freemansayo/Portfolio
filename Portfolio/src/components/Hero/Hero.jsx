import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title1}>Freeman Sayo</h1>
        <h2 className={styles.description}>Computer Engineering Student</h2>
        <h2 className={styles.school}>Queen's University</h2>
        <div className={styles.btndiv}>
          {/* GitHub Button */}
          <a href="https://github.com/FreemanSayoooo" target="_blank" className={`${styles.button} ${styles.github}`}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={styles.icon}>
      <path
        fill="white"
        d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.23c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.81 1.304 3.494.997.107-.775.418-1.304.76-1.603-2.665-.306-5.467-1.333-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.305-.535-1.527.117-3.18 0 0 1.008-.322 3.303 1.23.96-.267 1.987-.4 3.008-.405 1.02.005 2.047.138 3.008.405 2.294-1.552 3.3-1.23 3.3-1.23.653 1.653.24 2.875.118 3.18.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.62-5.478 5.92.43.37.814 1.096.814 2.207v3.293c0 .319.192.694.8.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"
      ></path>
    </svg>
    <p className={styles.text}>GitHub</p>
  </a>

          {/* LinkedIn Button */}
          <a href="https://www.linkedin.com/in/freeman-sayo-034753290/" target="_blank" className={`${styles.button} ${styles.linkedin}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="white">
          <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338a53.69 53.69 0 1 1 53.71-53.69 53.69 53.69 0 0 1-53.76 53.69zM447.8 448h-92.67V302.4c0-34.7-12.42-58.4-43.45-58.4-23.66 0-37.74 15.92-43.93 31.3-2.26 5.5-2.83 13.1-2.83 20.8V448H172.29s1.22-238.4 0-263h92.69v37.3a92.19 92.19 0 0 1 83.5-46.2c60.95 0 106.62 39.8 106.62 125.3V448z"/>
          </svg>

    <p className={styles.text}>LinkedIn</p>
  </a>
        </div>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
