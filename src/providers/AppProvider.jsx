import dotenv from 'dotenv';
import React, { useContext, createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

dotenv.config();

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [content, setContent] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.CONTENT_URI}?time=${new Date().getTime()}`)
      .then(({ data }) => {
        setContent(data);

        // This event gets called at build time after the API request
        // has completed and the content has been renndered.
        document.dispatchEvent(new Event('prerender-trigger'));
      })
      .catch(() => console.log('error'));
  }, []);

  return (
    <AppContext.Provider value={{ content }}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node,
};

AppProvider.defaultProps = {
  children: <></>,
};

export default AppProvider;
