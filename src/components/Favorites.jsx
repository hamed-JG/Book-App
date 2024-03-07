import React from "react";

import styles from "./Favorites.module.css";

function Favorites({ data: { image, title } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default Favorites;
