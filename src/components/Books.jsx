import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";

function Books() {
  console.log(books);
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
      <div>favorites</div>
    </div>
  );
}

export default Books;
