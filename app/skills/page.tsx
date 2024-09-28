"use client"
import React from "react";
import styles from "../page.module.css";

function Skills() {
  const images = [
    "videoframe_1544.png",
    "videoframe_2060.png",
    "php.jpg",
    "python.png",
    "css.jpg",
    "js.png",
    "react.png",
    "node.jpg",
    "mongo.png",
    "sql.jpg",
  ];

  const imagph = [
    "ligthroom.png",
    "picsart.jpg",
    "capcutt.png",
    
  ];


  return (
    <div className={styles.skills}>
      <h1 className={styles.abouttwo}>Mastering the Craft!!</h1>
      <h2 className={styles.academic}>"AS A DEVELOPER💻"</h2>
      
      {/* Render images for the developer section */}
      <div className={styles.imageGallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Developer Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>

      <h2 className={styles.academic}>"AS A PHOTOGRAPHER🌟"</h2>
      
      {/* Render images for the photographer section */}
      <div className={styles.imageGallery}>
        { imagph.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Photographer Image ${index + 1}`}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
