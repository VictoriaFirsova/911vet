import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.jpg" alt="Company Logo" />
          <p>&copy; 2024 911Vet.</p>
          <p>All rights reserved.</p>
        </div>
        <div className={styles.links}>
          <h3>{t('Footer.links')}</h3>
          <ul>
            <li><a href="#home">{t('about')}</a></li>
            <li><a href="#services">{t('services')}</a></li>
            <li><a href="#gallery">{t('gallery')}</a></li>
            <li><a href="#prices">{t('prices')}</a></li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>{t('Footer.contacts')}</h3>
          <p><a
                href="https://maps.app.goo.gl/SQUmNg96vCmsRe8R9"
                target="_blank"
                rel="noopener noreferrer"
                ><MdLocationPin /> Agmashenebeli 30, Poti, Georgia</a></p>

          <p><a href="tel:+995591175185"><FiPhone /> +995 (591) 175-185</a></p>
          <a href="mailto:911vetclinic@gmail.com">
            <MdAlternateEmail />  911vetclinic@gmail.com
          </a>

        </div>
        <div className={styles.socialMedia}>
          <h3>{t('Footer.follow')}</h3>
          <a href="https://www.facebook.com/p/Veterinary-Clinic-911-61556920859097/?locale=lv_LV" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://t.me/+995591175185" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/995591175185" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
