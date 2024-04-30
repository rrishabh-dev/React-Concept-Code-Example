import { useContext } from "react";

import { BookContext } from "../../../context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBookFromList } = useContext(BookContext);

  return (
    <li onClick={() => removeBookFromList(book.id)}>
      <div>{book.title}</div>
      <div>{book.author}</div>
    </li>
  );
};

export default BookDetails;
