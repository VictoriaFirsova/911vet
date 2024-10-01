import React, {useState, useRef} from 'react';
import styles from './Price.module.scss';
import { useTranslation } from "react-i18next";
import { FaArrowDownShortWide, FaArrowUpShortWide } from "react-icons/fa6";

const PriceList = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const listRef = useRef(null);
  const services = [
    { name: '1', price: '25 ₾'},
    { name: '2', price: '20 ₾' },
    { name: '3', price: '25 ₾' },
    { name: '4', price: '25-45 ₾' },
    { name: '5', price: '10 ₾' },
    { name: '6', price: '115 ₾' },
    { name: '7', price: '40 ₾' },
    { name: '8', price: '25 ₾' },
    { name: '9', price: '30 ₾ / сутки' },
    { name: '10', price: '15 ₾' },
    { name: '11', price: '15 ₾' },
    { name: '12', price: '25 ₾' },
    { name: '13', price: '12 ₾' },
    { name: '14', price: '20 ₾' },
    { name: '15', price: '10 ₾' },
    { name: '16', price: '2 ₾' },
    { name: '17', price: '2 ₾' },
    { name: '18', price: '5 ₾' },
    { name: '19', price: '10-15 ₾' },
    { name: '20', price: ' от 15-60 ₾' },
    { name: '21', price: '5 ₾' },
    { name: '22', price: '10 ₾' },
    { name: '23', price: '15/20 ₾' },
    { name: '24', price: '10 ₾' },
    { name: '25', price: '10-20 ₾' },
    { name: '26', price: 'от 10-20 ₾' },
    { name: '27', price: '10 -25 ₾' },
    { name: '28', price: '5 ₾' },
    { name: '29', price: '15/20 ₾' },
    { name: '30', price: '10 ₾' },
    { name: '31', price: '100 ₾' },
    { name: '32', price: '50 ₾' },
    { name: '33', price: '50-80 ₾' },
    { name: '34', price: '15 ₾' },
    { name: '35', price: '40 ₾' },
    { name: '36', price: '20 ₾' },
    { name: '37', price: '15 ₾' },
    { name: '38', price: '45 ₾' },
    { name: '39', price: '40-60 ₾' },
    { name: '40', price: '80-150 ₾' },
    { name: '41', price: '25-30 ₾' },

  ];

  const visibleServices = isExpanded ? services:services.slice(0, 6);
  const handleToggle = () => {
    if (isExpanded) {
      // При сворачивании прокручиваем к разделу "Прайс-лист"
      if (listRef.current) {
        listRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsExpanded(!isExpanded); // Переключаем состояние списка
  };
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.priceListContainer} id='prices' ref={listRef}>
        <h2 className={styles.title}>{t("Prices.title")}</h2>
        <table className={styles.priceTable}>
          <thead>
            <tr>
              <th>{t("Prices.service")}</th>
              <th>{t("Prices.price")}</th>
            </tr>
          </thead>
          <tbody>
            {visibleServices.map((service, index) => (
              <tr key={index}>
                <td>{t(`Prices.${service.name}`)}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Иконка для раскрытия списка */}
        <div
          className={styles.toggleIcon}
          onClick={handleToggle}
        >
          {isExpanded ? <FaArrowUpShortWide />: <FaArrowDownShortWide />}
        </div>
      </div>
    </div>
  );
};

export default PriceList;