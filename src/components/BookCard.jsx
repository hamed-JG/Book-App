import { useState } from "react";
import { FaStar } from "react-icons/fa";

import styles from "./BookCard.module.css";

function BookCard({ data, handleLikedList }) {
  const { title, image, author, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages}</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <FaStar color={like ? "yellow" : "#e0e0e0"} fontSize="1.5rem" />
      </button>
    </div>
  );
}

export default BookCard;
