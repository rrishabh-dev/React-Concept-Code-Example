import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseStateExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useState Examples</h1>
      <ul>
        <li onClick={() => navigate('counter')}>Counter</li>
        <li onClick={() => navigate('formInput')}>Form Input</li>
        <li onClick={() => navigate('updatingObjects')}>Updating Objects</li>
        <li onClick={() => navigate('conditionalRendering')}>Conditional Rendering</li>
      </ul>
    </>
  );
}

export default UseStateExample;
