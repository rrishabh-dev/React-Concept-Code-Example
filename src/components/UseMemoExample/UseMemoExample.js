import React from 'react';
import { useNavigate } from 'react-router-dom';

const UseMemoExample = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useMemo Examples</h1>
      <ul>
        <li onClick={() => navigate('sort')}>Sort Data</li>
        <li onClick={() => navigate('preservedReferences')}>Preserved References</li>
        <li onClick={() => navigate('skipHeavyComputation')}>Skip Heavy Computation</li>
        <li onClick={() => navigate('customHookUsingUseMemo')}>Custom Hook Using UseMemo</li>
      </ul>
    </>
  );
}

export default UseMemoExample;
