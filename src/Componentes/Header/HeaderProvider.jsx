import React from 'react'
import { useContext, createContext, useState } from 'react'




const HeaderContext = createContext();

const HeaderProvider = ({children}) =>{
    // const [openMenu, setopenMenu] = useState(false);
    // const toggleMenu = () => setopenMenu(!openMenu);

    return (
        <HeaderContext.Provider >
          {children}
        </HeaderContext.Provider>
      );
    };
    
    export { HeaderProvider, HeaderContext };

