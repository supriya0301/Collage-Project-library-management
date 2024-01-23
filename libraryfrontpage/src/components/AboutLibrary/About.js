// About.js
import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>Welcome to Our Library</h2>
      <p>
        Explore a world of knowledge and imagination at our library. We are dedicated to providing a rich collection of books and resources for all our patrons.
      </p>
      <p>
        Whether you're a student, researcher, or avid reader, our library offers a diverse range of genres and topics to satisfy your curiosity.
      </p>
      <p>
        Our friendly and knowledgeable staff is here to assist you in finding the perfect book, conducting research, or navigating our digital resources.
      </p>
      <p>
        Join us in fostering a love for reading and learning. Attend our events, book clubs, and workshops to engage with fellow book enthusiasts.
      </p>
      <p>
        We are committed to creating a welcoming and inclusive space for everyone. Your feedback is valuable to us as we strive to enhance the library experience for our community.
      </p>
      <div>
        <button className={styles.adminButton}>Admin Access</button>
        <button className={styles.updateButton}>Update Information</button>
      </div>
    </div>
  );
}

export default About;
