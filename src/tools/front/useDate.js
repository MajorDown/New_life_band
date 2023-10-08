import React from "react";

const useDate = () => {
  const date = new Date();
  let jour = date.getDate();
  let mois = date.getMonth() + 1;
  let année = date.getFullYear();

  if (jour < 10) {
    jour = "0" + jour;
  }

  if (mois < 10) {
    mois = "0" + mois;
  }

  return jour + "." + mois + "." + année;
};

export default useDate;
