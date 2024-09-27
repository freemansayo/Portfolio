import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import  Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <Navbar /> 

      <section className={styles.HeroSection}>
        <Hero />
      </section>

      <section className={styles.AboutSection} id='about'>
        <About />
      </section>

      <section className={styles.ProjectSection} id='projects'>
        <Projects />
      </section>

      <section className={styles.SkillSection} id='skills'>
        <Skills />
      </section>
      <section id='contact'>
      <Contact/>
      </section>
       
    </div>
  );
}

export default App;
