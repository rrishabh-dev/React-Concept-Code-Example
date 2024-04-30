import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseContextExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useContext Examples</h1>
      <ul>
        <li onClick={() => navigate('themeSwitch')}>Theme Switch</li>
        <li onClick={() => navigate('counter')}>Counter</li>
        <li onClick={() => navigate('bookManagement')}>Book Management</li>
        <li onClick={() => navigate('userAuthentication')}>User Authentication</li>
        <li onClick={() => navigate('preventPropDrilling')}>Prevent Prop Drilling</li>
        <li onClick={() => navigate('toast')}>Toast</li>
      </ul>
    </>
  );
}

export default UseContextExample;
