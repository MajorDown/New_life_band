import React, { createContext, useContext, useState } from "react";
import SiteData from "../data/siteData.json";

// DECLARATION DU CONTEXT
const SiteDataContext = createContext();

// DECLARATION DU HOOK
export function useSiteDataContext() {
  return useContext(SiteDataContext);
}

// DECLARATION DU PROVIDER
export function SiteDataProvider({ children }) {
  const [siteData, setSiteData] = useState(SiteData);
  const updateSiteData = (newData) => {
    setSiteData(newData);
  };
  return (
    <SiteDataContext.Provider value={{ siteData, updateSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
}
