import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';
import Spinner from '../spinner';

const Form = () => {
  const setup = () => ({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(setup());
  const [Loader, setLoader] = useState(false);

  const { title, author, category } = bookData;
  const changeHandler = (e) => {
    setBookData((prevState) => ({
      ...prevState,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      setLoader((prevState) => !prevState);
      await dispatch(addBook(bookData));
      setBookData(setup());
      setLoader((prevState) => !prevState);
    }
  };
  let formButton = '';
  if (Loader === false) {
    formButton = <button type="submit" className="formBtn">ADD BOOK </button>;
  } else {
    formButton = (
      <div
        style={{
          padding: '0.801rem 1.188rem 0.886rem 1.375rem',
          marginTop: '30px',
        }}
      >
        <Spinner width="25px" height="25px" />
      </div>
    );
  }
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={formHandler}>
        <input
          className="Title"
          name="title"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={changeHandler}
          required
        />
        <input
          className="Author"
          type="text"
          name="author"
          placeholder="Author Name"
          value={author}
          onChange={changeHandler}
          required
        />

        <select
          name="category"
          value={category}
          onChange={changeHandler}
        >
          <option value="" hidden>
            Category
          </option>
          <option value="Action">
            Action
          </option>
          <option value="Sci-fi">
            Science Fiction
          </option>
          <option value="Economy">
            Economy
          </option>
          <option value="Coding">
            Coding
          </option>
        </select>
        { formButton }
      </form>
    </div>
  );
};
export default Form;
