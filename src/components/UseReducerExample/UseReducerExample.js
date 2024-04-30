import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseReducerExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useReducer Examples</h1>
      <ul>
        <li onClick={() => navigate('formWithMultipleFields')}>Form with multiple fields</li>
        <li onClick={() => navigate('multipleStates')}>Multiple States</li>
        <li onClick={() => navigate('complexStates')}>Complex States</li>
      </ul>
    </>
  );
}

export default UseReducerExample;
