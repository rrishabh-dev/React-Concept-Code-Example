import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ toggleTheme, setToggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextProvider;
