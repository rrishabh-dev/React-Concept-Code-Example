import { createContext } from "react";

export const PreventPropDrillingContext = createContext();

const PreventPropDrillingProvider = ({ children }) => {
  const value = {
    Id: 107,
    Name: 'Rishabh',
    Location:'Kanpur',
    Salary: 2500000
  }

  return (
    <>
      <PreventPropDrillingContext.Provider value={value}>
        {children}
      </PreventPropDrillingContext.Provider>
    </>
  );
}

export default PreventPropDrillingProvider;
