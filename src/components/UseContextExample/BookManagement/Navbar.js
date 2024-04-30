import { useContext } from 'react';

import { BookContext } from '../../../context/BookContext';

const Navbar = () => {
  const { bookList } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Book List App</h1>
      <p>{bookList.length} books available in the List</p>
    </div>
  )
}

export default Navbar;
