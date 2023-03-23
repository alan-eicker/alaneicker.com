import React, { useEffect, useState, useContext, createContext } from 'react';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [] = useState();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log(e.target.scrollTop);
    });
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
