import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = { backendUrl };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
