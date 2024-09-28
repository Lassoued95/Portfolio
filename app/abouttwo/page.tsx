'use client'
import React from "react";
import styles from "../page.module.css";
function Aboutt(){
    return(
        <div>
         
        <h1 className={styles.abouttwo}>A Glimpse Into My Life!</h1>
        <h2 className={styles.academic}>"THE BACKGROUND ACADEMIC💻"</h2>
        
        <p className={styles.paragh1}>At just 20 years old, I’m a dedicated Computer Science student at the prestigious Higher Institute of Informatics of Mahdia (ISIMA). My journey is fueled by a passion for unraveling complex problems and mastering the art of algorithms and data structures. With deep expertise in Python and C, alongside a robust foundation in web development, I thrive on transforming abstract concepts into elegant solutions and dynamic digital experiences.</p>
        <h2 className={styles.academic}>"EXPERIANCES🌟"</h2>
       
        <p className={styles.paragh1}>In the thrilling world of coding and creativity, I embarked on an exhilarating adventure during the Coding Moon Challenge Hackathon 2023/2024. Competing among 20 dynamic teams, my innovative project—a unique website for a Tunisian cake company—earned me a distinguished 5th place ranking. 🏆✨ This experience was not just about the trophy, but about bringing a sprinkle of innovation to the sweet world of Tunisian pastries!</p>
        <img  className={styles.avatar2}
      src="20231203_151425.jpg"
      alt="Description of the image"
      />
     
        </div>
        
    );
    
}
export default Aboutt