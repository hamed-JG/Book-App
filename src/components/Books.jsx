import { useState } from "react";

import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import Favorites from "./Favorites.jsx";

import styles from "./Books.module.css";

function Books() {
  const [liked, setLiked] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.favorites}>
          <h4>Favorites</h4>
          {liked.map((book) => (
            <Favorites key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
