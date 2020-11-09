import styles from "./ImageGalleryItem.module.css";

import React from "react";

const ImageGalleryItem = () => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src="" alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
