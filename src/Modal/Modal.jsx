import styles from "./Madal.module.css";

import React from "react";

const Modal = ({ src, alt }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
