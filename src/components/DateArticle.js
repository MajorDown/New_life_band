import React from "react";

const DateArticle = ({ date }) => {
  return (
    <article>
      <h3>{date.place}</h3>
      <p className="date-city">
        {date.city}, {date.department}
      </p>
      <p className="date-day">{date.day}</p>
    </article>
  );
};

export default DateArticle;
