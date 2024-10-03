"use client";
import React from "react";
import styles from "../page.module.css";
import { link } from "fs";
const imagsocial = [
    { src: "icons8-facebook-48.png",
      link:"https://www.facebook.com/mohamedlassoued1010",
       
      },
      {
            src:"icons8-instagram-48.png",
            link:"https://www.instagram.com/lassoued_95?igsh=bDMzaHBpZGV2Y2Ns",
    },
        {
        src:"icons8-linkedin-48.png",
        link:"https://www.linkedin.com/in/mohamed-lassoued-a5b5b8243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
    
  ];
function SocialMed(){
    return(
       
        <div className={styles.imageGallerySocial}>
        { imagsocial.map((image, index) =>( 
            <a href={image.link} key={index} target="_blank" rel="noopener">
            <img
            src={image.src}
            className={styles.imageSocial}
          />
          </a>
        ))}
        </div>
        
       
    )
    
}
export default SocialMed;