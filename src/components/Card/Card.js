import React from "react";
import styles from "./Card.module.css";
import PropTypes from 'prop-types';

const Card = ({ imageSrc, title, subtitle}) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
};
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
};

export default Card;
