import styles from "./page.module.css";
import Header from "./components/Header";
import Image from "./components/Image";
import About from "./about/page";
import Aboutt from "./abouttwo/page";
import TypewriterComponent from './aboutthree/page'; // Importing the TypewriterComponent
import NAVBAR from "./navbar/page"; 
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactForm from"./contact/page";
import SocialMed from"./socialmedia/page";



function Home() {
  let hiddendesc = false;

  return (
   
    <body className={styles.body}>
    
    <main className={styles.main1}>
     
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
   
    
    
      <h1 id="home" className={styles.name}>👋</h1>  {/* Add an ID here */}
      <div className={styles.navbar}><NAVBAR/></div>
      
      <p className={styles.cardd} id="intro">Hi, Dreamers! 💭 👋</p>  {/* Add an ID here */}
      <div> 
          <p className={styles.me}>I`&apos;`m a</p>
        </div>
      <div className={styles.code}>
      <span className="emoji"></span>
        <TypewriterComponent/>
        
      </div>
      

      <p className={styles.paragh} id="about">
      Step into a world where coding meets creativity. As a MERN stack developer and photographer, I craft dynamic web applications and capture moments that inspire, blending the power of modern technology with a passion for visual storytelling
      </p>
      <div className={styles.social}>
        <SocialMed/>
        </div>
      
      <div className={styles.divavatar}><Image /></div>
      
      <div>
      <Aboutt/>
      
      </div>
      <div id="skills">
      <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
     <div id="contact">
      <h1 className={styles.abouttwo}>Contact Me!</h1>
      <ContactForm/>
      </div>
      <div>
        <p className={styles.pp}>copyrigth@Mohamed Lassoued 2024</p>
      </div>
     
    </main>
    </body>
  );
}

export default Home;