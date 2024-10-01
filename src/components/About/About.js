import React, {useContext} from "react";
import styles from "./About.module.scss";
import i18n from "../../i18n";
import { LanguageContext } from '../../LanguageContext';

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <main className={styles.about} id='about'>
      <div className={styles.imageContainer}>
        <img src="/IMG_0874.jpg" alt="main" />
      </div>
      <div className={styles.textContainer}>
        <h1>{i18n.t('About.title', { lng: language })}</h1>
        <h3>{i18n.t('About.description.part1', { lng: language })}</h3>
        <h3>{i18n.t('About.description.part2', { lng: language })}</h3>
        <h4>{i18n.t('About.postscriptum', { lng: language })}</h4>
      </div>
    </main>
  );
};

export default About;
