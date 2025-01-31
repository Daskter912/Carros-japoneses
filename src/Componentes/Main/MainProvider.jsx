import React from 'react'
import { createContext, useContext } from 'react'

const MainContex = createContext();

const MainProvider = ({children}) => {
  return (
    <MainContex.Provider>
        {children}
    </MainContex.Provider>
   
  );
};

export{ MainProvider,MainContex   }
