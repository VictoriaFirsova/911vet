import React, {useContext} from 'react';
import { LanguageContext } from '../../LanguageContext';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ href, className, onClick, onMouseDown, onMouseUp, onMouseLeave, ...props}) => {
const { language } = useContext(LanguageContext); // Получаем текущий язык из контекста

  // Объект с переводами
  const translations = {
    en: "Make an Appointment",
    ru: "Записаться на прием",
    ka: "დაჯავშნა",
  };

  return (
    <a
      href={href}
      className={`${styles.whiteButton} ${styles.blueButton}`} {...props} // Применение классов
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {translations[language]}

    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;


