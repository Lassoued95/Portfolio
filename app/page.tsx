import styles from "./page.module.css";
import Image from "./components/Image";
import About from "./about/page";
import Aboutt from "./abouttwo/page";
import TypewriterComponent from './aboutthree/page'; 
import NAVBAR from "./navbar/page"; 
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactForm from "./contact/page";
import SocialMed from "./socialmedia/page";

function Home() {
  return (
    <>
      <title>Mohamed Lassoued Portfolio</title>
       <div className={styles.body}> {/* Changed body tag to div */}
        <main className={styles.main1}>
          {/* Background lines */}
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        
          {/* Home Section */}
          <h1 id="home" className={styles.name}>👋</h1>
          <div className={styles.navbar}>
            <NAVBAR />
          </div>

          {/* Introduction */}
          <p className={styles.cardd} id="intro">Hi, Dreamers! 💭 👋</p>
          <div> 
            <p className={styles.me}>I&apos;m a</p>
          </div>
        
          {/* Typewriter Effect */}
          <div className={styles.code}>
            <span className="emoji"></span>
            <TypewriterComponent />
          </div>
        
          {/* About Section */}
          <p className={styles.paragh} id="about">
            Step into a world where coding meets creativity. As a MERN stack developer and photographer, I craft dynamic web applications and capture moments that inspire, blending the power of modern technology with a passion for visual storytelling.
          </p>
        
          {/* Social Media */}
          <div className={styles.social}>
            <SocialMed />
          </div>
        
          {/* Avatar/Image Section */}
          <div className={styles.divavatar}>
            <Image />
          </div>

          {/* About, Skills, and Projects Sections */}
          <div>
            <Aboutt /> 
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="projects">
            <Projects />
          </div>

          {/* Contact Section */}
          <div id="contact">
            <h1 className={styles.abouttwo}>Contact Me!</h1>
            <ContactForm />
          </div>

          {/* Footer */}
          <div>
            <p className={styles.pp}>Designed for the dreamers, built by Mohamed 💡</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
