import React from "react";
import { Link } from "react-router-dom";
import "./ShowCard.scss";

function ShowCard({ performer, icons }) {
  return (
    <div className="ShowCard">
      <img src={performer.imgUrl} alt={performer.name} />
      <div className="content">
        <h4 className="label">{performer.tag}</h4>
        <h1 className="heading">{performer.name}</h1>
        <div className="content__footer">
          <Link to="/404" className="button">
            More Info
            <span className="rightIcon">
              <img src={icons.ArrowRightIcon} alt="arrow-right" />
            </span>
          </Link>
          <Link to="/404">
            <div className="ticket"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
