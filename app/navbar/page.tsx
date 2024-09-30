'use client';
import React, { useState, useEffect, useRef } from "react";
import styles from "../page.module.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef<HTMLDivElement>(null); // Create a ref for the navbar

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu if clicking outside of the navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the navbar
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Close the menu if clicked outside
            }
        };

        // Add event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Clean up the event listener on unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={navbarRef}>
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
