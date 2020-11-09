import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import React from "react";

const ImageGallery = () => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
