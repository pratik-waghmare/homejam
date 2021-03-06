import React from 'react';
import './ReviewCard.scss';

function ReviewCard({ review }) {
  return (
    <div className="ReviewCard">
      <img src={review.imgUrl} alt="benny" />
      <div className="header">
        <h1 className="heading">{review.name}</h1>
        <div className="city__wrapper">
          <img src={review.flag} alt={review.city} />
          <h4 className="city">{review.city}</h4>
        </div>
      </div>
      <div className="content">
        <p>{review.text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
