import React from "react";
import Card from "../Card/Card"; // Импорт компонента Card
import styles from "../Team/Team.module.scss";
import { useTranslation } from "react-i18next"; // Используем `react-i18next` для перевода

const Team = () => {
  const { t } = useTranslation();
    return (
      <main className={styles.wrapper} id="team">

        <h2 className={styles.heading}>{t("Team.title")}</h2>
        <div className={styles.container}>
          <div className={styles.cards}>
            <Card
              imageSrc="IMG_0543.jpg"
              title={t("TeamCards.Sasha.title")}
              subtitle={t("TeamCards.Sasha.subtitle")}
            />
            <Card
              imageSrc="IMG_0792.jpg"
              title={t("TeamCards.Dima.title")}
              subtitle={t("TeamCards.Dima.subtitle")}
            />
          </div>
        </div>

      </main>
    );
  };

  export default Team;
