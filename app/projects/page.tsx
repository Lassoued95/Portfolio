'use client';
import React from "react";
import styles from "../page.module.css";
import { link } from "fs";
import { title } from "process";

const images = [
  {
    src: "DSC_8558.jpg",
    title:"click to visit the instagram post",
    link: "https://www.instagram.com/p/C_0XsfVIjPE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  { src: "DSC_8121.jpg",
    title:"click to visit the instagram post",
    link:"https://www.instagram.com/p/CwPSTG8t8NY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  { src: "DSC_8532.jpg",
    title:"click to visit the instagram post",
    link:"https://www.instagram.com/p/C92U2IWNgXZ/?utm_source=ig_web_copy_link",
   },
  { src: "DSC_8533.jpg",
    title:"click to visit the instagram post",
    link:"https://www.instagram.com/p/C92U2IWNgXZ/?utm_source=ig_web_copy_link",
  },
  { src: "IMG-20230824-WA0019.jpg",
    title:"click to visit the instagram post",
    link:"https://www.instagram.com/p/C92U2IWNgXZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  
  
  
];

function Projects() {
  return (
    <div>
      <h1 className={styles.abouttwo}>Digital Masterpieces🎨!</h1>
      <h2 className={styles.academic}>`&quot;AS A DEVELOPER💻&quot;`</h2>

      <a href="https://mindmastershackathon.netlify.app">
        <img
          className={styles.logogoutina}
          src="goutina.png"
          title="Click to visit Mindmasters Hackathon"
          alt="Goutina logo"
        />
      </a>
      <p className={styles.paragh11}>
        Crafted a stunning HTML/CSS/JS website for a Tunisian cake company in
        under 12 hours during the 2024 Coding Moon Challenge Hackathon!
      </p>

      <h2 className={styles.academic}>&quot;AS A Photographer📷&quot;</h2>
      <div className={styles.imageGallery}>
        {images.map((image, index) =>
          image.link ? (
            <a href={image.link} key={index} target="_blank" rel="noopener noreferrer">{/*  target="_blank" opens a link in a new tab, and adding rel="noopener noreferrer" ensures it’s done securely.  */}
              <img
                src={image.src}
                alt={`Photographer Image ${index + 1}`}
                className={styles.image}
              />
            </a>
          ) : (
            <img
              key={index}
              src={image.src}
              alt={`Photographer Image ${index + 1}`}
              className={styles.image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
