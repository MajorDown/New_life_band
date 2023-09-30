import React, { createContext, useContext, useState, useEffect } from "react";

// DECLARATION DU CONTEXT
const UserContext = createContext();

// DECLARATION DU HOOK
export function useUserContext() {
  return useContext(UserContext);
}

// DECLARATION DU PROVIDER
export function UserProvider({ children, item }) {
  const [userId, setUserId] = useState(null);
  const updateUserId = (newId) => {
    setUserId(newId);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserId(localStorage.getItem(item) || null);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
}
