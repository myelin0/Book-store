import React, { useState } from 'react';
import PropTypes from 'prop-types';
import statusIcon from '../status-icon.png';

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
    <div className="listContainer">
      <div className="bookCard">
        <div className="bookInformation">
          <div className="bookDetails">
            <p className="bookCategory">{capitalizeFirstChar(category)}</p>
            <h2 className="bookTitle">{title}</h2>
            <span className="author">{author}</span>
          </div>

          {' '}
          <br />
          <div className="bookButtons">
            <button className="commentsBtn right-border" type="button">Comments</button>
            <button
              className="removeBtn right-border"
              type="button"
              onClick={() => removeBookHandler(id)}
            >
              Remove
            </button>
            <button className="editBtn" type="button">Edit</button>
          </div>
        </div>
        <div className="otherInformation">
          <div className="status--information">
            <img className="statusIcon" src={statusIcon} alt="status icon" />
            <div className="percent-number">64%</div>
            <div className="text-completed">Completed</div>
          </div>

          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapterDetail">
            Chapter
            {' '}
            {' '}
            {percentage}
          </p>
          <button
            className="updateBtn"
            type="button"
            onClick={Progress}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
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
