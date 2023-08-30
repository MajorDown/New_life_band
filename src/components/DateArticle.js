import React from "react";

const DateArticle = ({ date }) => {
  return (
    <article className="dateArticle">
      <h3>{date.place}</h3>
      <p className="dateCity">
        {date.city}, {date.department}
      </p>
      <p className="dateDay">{date.day}</p>
    </article>
  );
};

export default DateArticle;
