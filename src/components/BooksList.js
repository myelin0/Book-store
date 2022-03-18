import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booksReducer);
  const removeBookfromStore = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map(({
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
          ))
        ) : (
          <li>
            <h3>No books added</h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
