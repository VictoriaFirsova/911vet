
import React, { useContext } from 'react';
import Card from "../Card/Card"; // Импорт компонента Card
import styles from "./Contact.module.css";
import { LanguageContext } from '../../LanguageContext'; // Импорт контекста перевода

const Contact = () => {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: {
            title: "Contacts",
            email: "E-mail",
            phone: "Phone",
            location: "Our Location",
        },
        ru: {
            title: "Контакты",
            email: "E-mail",
            phone: "Телефон",
            location: "Наше местоположение",
        },
        ka: {
            title: "კონტაქტები",
            email: "ელ. ფოსტა",
            phone: "ტელეფონი",
            location: "ჩვენი ადგილმდებარეობა",
        }
    };

    const t = translations[language];

    return (
        <main id="services">
            <div className={styles.textContainer}>
                <h1>{t.title}</h1>
            </div>
            <div className={styles.cards}>
                <Card
                    imageSrc="/6.png"
                    title={t.email}
                    subtitle={<a href="mailto:911vetclinic@gmail.com">911vetclinic@gmail.com</a>}
                />
                <Card
                    imageSrc="/6.png"
                    title={t.phone}
                    subtitle={<a href="tel:+995591175185">+995(591)175-185</a>}
                />
                <Card
                    imageSrc="/7.png"
                    title={t.location}
                    subtitle={
                        <a
                            href="https://maps.app.goo.gl/SQUmNg96vCmsRe8R9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agmashenebeli 30, Poti, Georgia
                        </a>
                    }
                />
            </div>
        </main>
    );
};

export default Contact;


