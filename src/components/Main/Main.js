import React, {useContext} from 'react';
import styles from './Main.module.scss'; // Импорт стилей
import i18n from "../../i18n";
import { LanguageContext } from '../../LanguageContext'; // Импортируем контекст


const Main = () => {
  const { language } = useContext(LanguageContext);

  return (
    <main className={styles.main}>
      <div className={styles.textContainer}>
        <h2>{i18n.t('Main.h2', { lng: language })}</h2>
        <h1 dangerouslySetInnerHTML={{ __html: i18n.t('Main.h1', { lng: language }) }} />

        <h3>{i18n.t('Main.h3', { lng: language })}</h3>
        {/*"h2": "Современная ветеринарная помощь в заботливых руках",
      "h1": "Ваша любимая клиника для домашних питомцев",
      "h3": "Мы используем передовые методы диагностики и лечения, чтобы обеспечить здоровье вашего питомца"*/}
      </div>

      <div className={styles.imageContainer}>
        <img src="/IMG_0537.jpg" alt="main" />
      </div>
    </main>
  );
};

export default Main;