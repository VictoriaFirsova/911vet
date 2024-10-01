import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import { useTranslation } from "react-i18next";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
};

const images = importAll(require.context('../../assets/images', false, /\.(jpg|jpeg|png|JPG)$/));

const imageKeys = Object.keys(images);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(6); // Начальное значение

  const { t } = useTranslation();

  // Обновление количества изображений на странице при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagesPerPage(4);
      } else if (window.innerHeight <= 480) {
        setImagesPerPage(2);
      }
       else {
        setImagesPerPage(6);
      }
    };

    handleResize(); // Устанавливаем начальное значение
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(imageKeys.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const currentImages = imageKeys.slice(startIndex, startIndex + imagesPerPage).map((key) => images[key]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePageChange = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={styles.gallery} id="gallery">
      <h2 className={styles.heading}>{t("Gallery.title")}</h2>
      <div className={styles.grid}>
        {currentImages.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt="" className={styles.thumbnail} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={handleClose}>
          <img src={selectedImage} alt="" className={styles.fullscreenImage} />
        </div>
      )}

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={currentPage === index ? styles.activePage : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Gallery;




