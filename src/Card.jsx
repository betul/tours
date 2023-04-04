import React from "react";

function Card({ tour, removeTour, toggleSummary }) {
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <div className="tour-info">
        <span className="tour-price">${tour.price}</span>
        <h4>{tour.name}</h4>
        <p>
          {tour.isSummaryShown ? tour.info : tour.info.substring(0, 200) + "..."}
          <button onClick={() => toggleSummary(tour.id)}>
            {tour.isSummaryShown ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={() => removeTour(tour.id)} className="delete-btn">
          not interested
        </button>
      </div>
    </article>
  );
}

export default Card;
