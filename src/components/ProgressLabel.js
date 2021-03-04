import React from 'react';
import './ProgressLabel.scss';

function ProgressLabel({ labelInfo }) {
  const offset = 440 - (440 * (labelInfo.count / 10)) / 100;

  return (
    <div className="ProgressLabel">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        {labelInfo.type === 'likes' && (
          <circle
            cx="70"
            cy="70"
            r="70"
            style={{ strokeDashoffset: offset }}
          ></circle>
        )}
      </svg>
      <div className="ProgressLabel__content">
        <img src={labelInfo.icon} alt="heart-icon" />
        <h4>
          {labelInfo.isPositive && '+'}
          {labelInfo.count}
          {labelInfo.type === 'users' && 'K'}
        </h4>
        <p>{labelInfo.title}</p>
      </div>
    </div>
  );
}

export default ProgressLabel;
