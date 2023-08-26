import React from "react";
import SiteData from "@/data/siteData";
import DateArticle from "@/components/DateArticle";

const Dates = () => {
  return (
    <section id="DateSection">
      <h2>Prochains Concerts</h2>
      {SiteData.dates.map((date, index) => (
        <DateArticle key={index} date={date} />
      ))}
    </section>
  );
};

export default Dates;
