'use client';
import React, { useState } from "react";
import styles from "../page.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={styles.navbar}>
                {/* Hamburger Menu Icon */}
                <div className={styles.menuIcon} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                        
                        
                </div>


                {/* Navigation Links */}
                <ul className={`${styles.ulh} ${isOpen ? styles.active : ""}`}>
                <li className={styles.lih}>
                        <a href="#home" className={styles.ah}>Home</a>
                    </li>
                    <li className={styles.lih}>
                        <a href="#about" className={styles.ah}>About</a>
                    </li>
                    <li className={styles.lih}>
                        <a href="#skills" className={styles.ah}>Skills</a>
                    </li>
                   
                    <li className={styles.lih}>
                        <a href="#projects" className={styles.ah}>Projects</a>
                    </li>
                    <li className={styles.lih}>
                        <a href="#contact" className={styles.ah}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
