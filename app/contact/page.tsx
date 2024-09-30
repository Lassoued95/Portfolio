'use client';
import React, { useState } from "react";
import styles from "../page.module.css";
import emailjs from 'emailjs-com'; // Import EmailJS

function ContactForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input changes for both <input> and <textarea>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(
      'service_cx013wb',        // Replace with your EmailJS Service ID
      'template_8oksmj6',       // Replace with your EmailJS Template ID
      e.currentTarget,          // Pass the form element to sendForm
      'qQ530j6L2xIHoQJm-'       // Replace with your EmailJS User ID
    )
    .then(
      (result) => {
        alert("Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      },
      (error) => {
        alert("Failed to send the message, please try again.");
        console.error('EmailJS Error:', error);
      }
    );
  };

  return (
    <div className={styles.contactFormContainer}>
      <h4>📞+216 25 740 872</h4>
      <h4>✉️lassouedmohamed2004@gmail.com</h4>
      <h4>📍Djerba Midoun 4116</h4>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.formTextarea}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
