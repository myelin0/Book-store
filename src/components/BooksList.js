import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadBookThunk, removeBookThunk } from '../redux/books/bookThunks';
import Book from './Book';

let fetched = false;

const BookList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer.books);

  const removeBookfromStore = (bookId) => {
    dispatch(removeBookThunk(bookId));
  };

  useEffect(() => {
    if (!fetched) {
      dispatch(loadBookThunk());
      fetched = true;
    }
  }, []);

  if (data.length === 0) {
    return (
      <div className="title" style={{ margin: '2.313rem 6.25rem 0' }}>
        <h2>No books saved</h2>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {data.map(({
          id, title, author, category,
        }) => (
          <Book
            key={id}
            title={title}
            author={author}
            category={category}
            id={id}
            removeBookHandler={removeBookfromStore}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
