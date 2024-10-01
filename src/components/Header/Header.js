import React, {useState, useEffect, useContext} from 'react';
import styles from './Header.module.scss';  // Импорт стилей
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../LanguageContext';
import { FiPhone } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Header = () => {
  const { t } = useTranslation(); // Функция для перевода
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { language, switchLanguage } = useContext(LanguageContext);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLanguageChange = (event) => {
    switchLanguage(event.target.value);
  };

  // Обработчик для закрытия меню при клике вне его области
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isNavOpen && !event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.menuToggle}`)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // Удаление обработчика клика при размонтировании компонента
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isNavOpen]); // Перепривязываем эффект при изменении состояния `isNavOpen`

  return (
    <header className={styles.header} id='home'>
      <div className={styles.logo}>
        <img src="/logo.jpg" alt={t('logoAlt')} />
      </div>
      <div className={styles.contactInfo}>
            <a
              href="https://maps.app.goo.gl/SQUmNg96vCmsRe8R9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationPin /> Agmashenebeli 30, Poti, Georgia
            </a>
            <a href="tel:+995591175185"><FiPhone /> +995 (591) 175-185</a>
      </div>
      <div className={styles.menuToggle} onClick={toggleNav}>☰</div>

      <nav className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
        <ul>
          {/*<li><a
                href="https://maps.app.goo.gl/SQUmNg96vCmsRe8R9"
                target="_blank"
                rel="noopener noreferrer"
                ><MdLocationPin />Agmashenebeli 30, Poti, Georgia</a>
          <a href="tel:+995591175185"><FiPhone /> +995 (591) 175-185</a></li>
          {/*<li><a href="#about">{t('about')}</a></li>*/}
          <li><a href="#services">{t('services')}</a></li>
          <li><a href="#team">{t('team')}</a></li>
          <li><a href="#gallery">{t('gallery')}</a></li>
          <li><a href="#prices">{t('prices')}</a></li>
          <li><a href="#footer">{t('contact')}</a></li>
          <li>
            <select
              value={language}
              onChange={handleLanguageChange}
              className={styles.languageSwitcher}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="ka">ქართული</option>
            </select>
          </li>
        </ul>
      </nav>
      {isNavOpen && <div className={styles.overlay} onClick={toggleNav}></div>}
    </header>
  );
};

export default Header;
