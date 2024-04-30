import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState([
    { id: 1, title: "Rich dad poor dad", author: "Robert K." },
    { id: 2, title: "Synonyms antonyms", author: "B.N. Ahuja" },
  ]);

  const addBooksToList = (title, author) => {
    const newBooksToList = [...bookList, { title, author, id: uuidv4() }];
    setBookList(newBooksToList);
  };

  const removeBookFromList = (id) => {
    let removeBook = bookList.filter((book) => book.id !== id);
    setBookList(removeBook);
  };

  return (
    <>
      <BookContext.Provider value={{ bookList, addBooksToList, removeBookFromList }}>
        {children}
      </BookContext.Provider>
    </>
  );
}

export default BookContextProvider;
