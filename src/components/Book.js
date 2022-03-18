import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category, removeBookHandler,
}) => {
  const [percentage, setPercentage] = useState(Math.floor(Math.random() * 99));
  const Progress = () => {
    setPercentage((prevPercent) => {
      if (prevPercent < 100) {
        if ((prevPercent + 10) <= 100) {
          return prevPercent + 10;
        }
        const final = 100 - prevPercent;
        return prevPercent + final;
      }
      return prevPercent;
    });
  };

  const capitalizeFirstChar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <div>
      <p className="bookCategory">{capitalizeFirstChar(category)}</p>
      <h2 className="BookTitle">{title}</h2>
      <span className="author">{author}</span>
      {' '}
      <br />
      <button type="button">Comments</button>
      <button
        type="button"
        onClick={() => removeBookHandler(id)}
      >
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
        {percentage}
      </p>
      <button
        type="button"
        onClick={Progress}
      >
        UPDATE PROGRESS
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default Book;
