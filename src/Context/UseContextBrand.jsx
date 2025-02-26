import React, { createContext } from 'react'
import { useContext, useState } from 'react'

const BrandContex =  createContext();



const UseContextBrand = ({children}) => {

const Marcas = ["Honda", "Suzuki", "Mazda" ];
const [Opselect, setOpselect] = useState();





  return (
    <BrandContex.Provider Value={{Marcas, Opselect, setOpselect   }} >
        {children}
    </BrandContex.Provider>
   
  );
};

export{UseContextBrand, BrandContex }
