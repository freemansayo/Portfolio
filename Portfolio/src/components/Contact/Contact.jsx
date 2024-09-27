import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactDetails}>
        {/* Email */}
        <div className={styles.contactItem}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="30px" height="30px">
    <path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5 l-8-5V6l8,5l8-5V8z"/>
  </svg>
  <p>Email: freemansayo@gmail.com</p>
</div>

        {/* LinkedIn */}
        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 448 512" fill="black">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.07 108.1 0 83.13 0 53.79A53.69 53.69 0 0 1 53.79 0c29.83 0 53.79 24.86 53.79 53.79S83.62 108.1 53.79 108.1zm394.2 339.9h-92.68V305.7c0-33.9-12.2-57.1-42.63-57.1-23.26 0-37.07 15.63-43.14 30.7-2.23 5.41-2.78 12.9-2.78 20.4V448h-92.88s1.2-236.6 0-261.1h92.88v37c-.18.28-.43.57-.6.85h.6v-.85c12.34-19 34.44-45.9 83.91-45.9 61.3 0 107.3 39.9 107.3 125.7V448z"/>
          </svg>
          <p>
            LinkedIn:Freeman Sayo
          </p>
        </div>

        {/* GitHub */}
        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="black">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.306 3.495.998.107-.775.419-1.306.763-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.312.469-2.381 1.236-3.221-.124-.303-.536-1.527.116-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.047.138 3.004.404 2.293-1.552 3.301-1.23 3.301-1.23.653 1.649.241 2.873.118 3.176.77.84 1.235 1.909 1.235 3.221 0 4.609-2.803 5.623-5.475 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.218.694.825.576 4.768-1.587 8.205-6.084 8.205-11.387 0-6.627-5.373-12-12-12z"/>
          </svg>
          <p>
            GitHub: FreemanSayoooo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
