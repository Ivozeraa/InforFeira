import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from '../css/Footer.module.css'; // Importar o arquivo CSS module

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a
          href="https://www.instagram.com/inforanazeliaoficial" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.instagramIcon}
        >
          <FaInstagram size={32} />
        </a>
        <p className={styles.footerMessage}>A tecnologia move o mundo, Steve Jobs</p>
      </div>
    </footer>
  );
};


