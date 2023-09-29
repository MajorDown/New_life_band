import { useState, useEffect } from "react";

function useLocalStorage(item) {
  if (typeof window !== "undefined") {
    // INITIALISATION DU HOOK
    const [itemValue, setItemValue] = useState(localStorage.getItem(item));

    const handleStorageChange = (event) => {
      console.log("event capté :", event);
      if (event.key === item) {
        setItemValue(event.newValue || null);
      }
    };
    window.addEventListener("storage", (event) => handleStorageChange(event));

    // Renvoie la valeur actuelle de l'item
    return itemValue;
  }
  return null;
}

export default useLocalStorage;
