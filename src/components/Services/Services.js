import React, { useState } from "react";
import styles from "./Services.module.scss";
import { useTranslation } from "react-i18next"; // Используем `react-i18next` для перевода
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';




const Services = () => {
  const { t, i18n } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);
  const language = i18n.language;

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedService(null);
  };

  // Обработчик клика по карточке
  const handleCardClick = (serviceKey) => {
    setSelectedService(serviceKey);
  };

  // Обработчик клика вне модального окна
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modalOverlay)) {
      closeModal();
    }
  };

  return (
    <main className={styles.container} id="services">
      <div className={styles.cards}>
        <div className={styles.card} onClick={() => handleCardClick("Hospital")}>
          <img src="/12.jpg" alt={t("Cards.Hospital.title")} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{t("Cards.Hospital.title")}</h3>
          {/*<p className={styles.cardSubtitle}>{t("Cards.Hospital.subtitle")}</p>*/}
        </div>

        <div className={styles.card} onClick={() => handleCardClick("Laboratory")}>
          <img src="/13.jpg" alt={t("Cards.Laboratory.title")} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{t("Cards.Laboratory.title")}</h3>
          {/*<p className={styles.cardSubtitle}>{t("Cards.Laboratory.subtitle")}</p>*/}
        </div>
        <div className={styles.card} onClick={() => handleCardClick("Surgery")}>
          <img src="/16.jpg" alt={t("Cards.Surgery.title")} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{t("Cards.Surgery.title")}</h3>
          {/*<p className={styles.cardSubtitle}>{t("Cards.Surgery.subtitle")}</p>*/}
        </div>

        <div className={styles.card} onClick={() => handleCardClick("Diagnostics")}>
          <img src="/17.jpg" alt={t("Cards.Diagnostics.title")} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{t("Cards.Diagnostics.title")}</h3>
          {/*<p className={styles.cardSubtitle}>{t("Cards.Diagnostics.subtitle")}</p>*/}
        </div>
      </div>

      <div className={styles.textButtonContainer}>
        <div className={styles.textContainer}>
          <h1>{t("Services.h1")}</h1>
          <h3>{t("Services.h3")}</h3>
        </div>
        <div className={styles.socialMedia}>
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

      {/* Модальное окно */}
      {selectedService && (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <div className={styles.modalImageContainer}>
              <img
              src={`/${selectedService}.jpg`}
              alt={t(`Cards.${selectedService}.title`)}
              className={styles.serviceImage}/>
            </div>

            <div className={styles.modalTextContainer}>
              <h2>{t(`Cards.${selectedService}.title`)}</h2>
              <p
                dangerouslySetInnerHTML={{
                __html: i18n.t(`Cards.${selectedService}.description`, { lng: language }),
                }}
              ></p>
              <button className={styles.closeButton} onClick={closeModal}>
                {t("Close")}
            </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;
