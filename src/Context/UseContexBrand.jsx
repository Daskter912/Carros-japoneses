import React from "react";
import { useState } from "react";
import { createContext } from "react";


const BrandContext =  createContext();
const UseContexBrand = ({children}) => {


    const marcas = ["Honda", "Suzuki", "Mazda", "Nissan", "Subaru", "Mitsubishi "];
    const [Opselect, setOpselect] = useState();


return (
    <BrandContext.Provider value={{marcas,Opselect, setOpselect}} >
        {children}
    </BrandContext.Provider>

    );
};

export{UseContexBrand, BrandContext }