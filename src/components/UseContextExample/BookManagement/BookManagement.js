import React from 'react';

import './BookManagement.css';
import Navbar from './Navbar';
import BookList from './BookList';
import BookForm from './BookForm';

const BookManagement = () => {
  return (
    <div>
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  )
}

export default BookManagement;
