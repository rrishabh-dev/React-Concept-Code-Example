import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseEffectExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useEffect Examples</h1>
      <ul>
        <li onClick={() => navigate('fetchAPI')}>Fetch API</li>
        <li onClick={() => navigate('inputValidation')}>Input Validation</li>
        <li onClick={() => navigate('liveFilter')}>Live Filter</li>
        <li onClick={() => navigate('triggerAnimation')}>Trigger Animation</li>
        <li onClick={() => navigate('updateFetch')}>Update Fetch</li>
        <li onClick={() => navigate('listenGlobalBrowserEvent')}>List Global Browser Event</li>
      </ul>
    </>
  );
}

export default UseEffectExample;
