import React from 'react';
import { useNavigate } from 'react-router-dom';

const HOCExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>HOC Examples</h1>
      <ul>
        <li onClick={() => navigate('dataFetch')}>Data Fetch</li>
        <li onClick={() => navigate('featureToggle')}>Feature Toggle</li>
        <li onClick={() => navigate('errorBoundary')}>Error Boundary</li>
        <li onClick={() => navigate('authorization')}>Authorization</li>
        <li onClick={() => navigate('translation')}>Translation</li>
        <li onClick={() => navigate('increment')}>Increment</li>
        <li onClick={() => navigate('style')}>Style</li>
      </ul>
    </>
  );
}

export default HOCExample;
