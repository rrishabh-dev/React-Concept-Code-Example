import React, { useState } from 'react';

import './StarRating.css';

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating = () => {
  const value = 2;
  const total = 10;
  const [selection, setSelection] = useState(0);
  const [rating, setRating] = useState(value || 0);

  const onHover = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id")) val = event.target.getAttribute("data-star-id");
    setSelection(val);
  };

  return (
    <div className="main-container">
      <h1>Star Rating</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        onMouseOver={onHover}
        onMouseLeave={() => onHover(null)}
        onClick={(e) => setRating(e.target.getAttribute("data-star-id") || rating)}
      >
        {Array.from({ length: total }, (_, index) => {
          return (
            <Star
              marked={selection ? selection >= index + 1 : rating >= index + 1}
              starId={index + 1}
              key={`star_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
