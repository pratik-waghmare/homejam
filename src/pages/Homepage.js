import React from "react";
import ProgressLabel from "./../components/ProgressLabel";
import ShowCard from "./../components/ShowCard";
import ReviewCard from "./../components/ReviewCard";

import { performers, reviews, icons, labelInfo } from "./Data";
import "./Homepage.scss";

function Homepage() {
  console.log("https://www.pratikwaghmare.space");

  return (
    <div className="HomePage">
      <section className="Hero">
        <div className="Hero__container">
          <h1 className="heading">Cari Cari</h1>
          <h2 className="subHeading">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </h2>
        </div>
        <div className="Hero__labelContainer">
          {labelInfo.map((label) => (
            <ProgressLabel key={label.id} labelInfo={label} />
          ))}
        </div>
      </section>
      <section className="Shows">
        <div className="Shows__header">
          <h1 className="heading">Upcoming Shows</h1>
          <a href="/" className="label">
            View All
          </a>
        </div>
        <div className="Shows__content">
          {performers.map((performer) => (
            <ShowCard key={performer.id} performer={performer} icons={icons} />
          ))}
        </div>
      </section>
      <section className="Reviews">
        <div className="Shows__header">
          <h1 className="heading">Reviews</h1>
          <div className="label">
            <p className="pageNumber">
              1 <span>/12</span>
            </p>
            <span className="pageChangeIcons">
              <a href="/">
                <img src={icons.ArrowLeftIcon} alt="left-arrow" />
              </a>
              <a href="/">
                <img src={icons.ArrowRightIcon} alt="right-arrow" />
              </a>
            </span>
          </div>
        </div>
        <div className="Reviews__content">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
