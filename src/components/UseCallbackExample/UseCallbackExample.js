import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseCallbackExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useCallback Examples</h1>
      <li onClick={() => navigate('count&Title')}>Count & Title</li>
    </>
  );
}

export default UseCallbackExample;
