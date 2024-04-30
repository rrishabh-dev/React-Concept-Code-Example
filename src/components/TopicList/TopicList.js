import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopicList = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Examples of Important React Topics:</h1>
      <ul>
        <li onClick={() => navigate('hoc-example')}>HOC</li>
        <li onClick={() => navigate('useState-example')}>useState</li>
        <li onClick={() => navigate('useEffect-example')}>useEffect</li>
        <li onClick={() => navigate('useContext-example')}>useContext</li>
        <li onClick={() => navigate('useRef-example')}>useRef</li>
        <li onClick={() => navigate('useMemo-example')}>useMemo</li>
        <li onClick={() => navigate('useCallback-example')}>useCallback</li>
        <li onClick={() => navigate('useReducer-example')}>useReducer</li>
        <li onClick={() => navigate('api-call')}>API Call & filter Data</li>
      </ul>
    </>
  );
}

export default TopicList;
