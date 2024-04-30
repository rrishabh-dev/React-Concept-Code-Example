import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseRefExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useRef Examples</h1>
      <ul>
        <li onClick={() => navigate('accessDOM')}>Access DOM</li>
        <li onClick={() => navigate('buttonClickCounter')}>Button Click Counter</li>
        <li onClick={() => navigate('stopWatch')}>Stop Watch</li>
        <li onClick={() => navigate('videoPlayer')}>Video Player</li>
        <li onClick={() => navigate('exposingRef')}>Exposing Ref</li>
      </ul>
    </>
  );
}

export default UseRefExample;
