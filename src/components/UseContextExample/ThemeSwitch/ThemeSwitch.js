import React, { useContext } from 'react';

import './ThemeSwitch.css'
import { ThemeContext } from '../../../context/ThemeContext';

const ThemeSwitch = () => {
  const { toggleTheme, setToggleTheme } = useContext(ThemeContext);

  return (
    <div className='mainContainer'>
      <button
        onClick={() => setToggleTheme((prevTheme) => !prevTheme)}
        className={toggleTheme ? 'lightButtonTheme' : 'darkButtonTheme'}
      >
        Enable {toggleTheme ? 'Light' : 'Dark'} Theme
      </button>

      <div className={toggleTheme ? 'darkTheme' : 'lightTheme'}>
        <p className='themeTitleText'>Current Theme: {toggleTheme ? 'Dark' : 'Light'}</p>
      </div>
    </div>
  )
}

export default ThemeSwitch;
