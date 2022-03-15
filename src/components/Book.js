import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <p className="bookCategory">Action</p>
      <h2 className="BookTitle">{title}</h2>
      <span className="author">{author}</span>
      {' '}
      <br />
      <button type="button">Comments</button>
      <button type="button">
        Remove
      </button>
      <button type="button">Edit</button>
      <div>circle</div>
      <div>64% Completed</div>
      <p className="chapter">CURRENT CHAPTER</p>
      <p className="chapterDetail">
        Chapter
        {' '}
        {' '}
        17%
      </p>
      <button type="button">
        UPDATE PROGRESS
      </button>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
