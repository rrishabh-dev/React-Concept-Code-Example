import { useContext, memo } from 'react';

import { CounterContext } from '../../../context/CounterContext';

const Counter = () => {
  const { counter, increase, decrease } = useContext(CounterContext);

  console.log('Counter component rendered');

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increase}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default memo(Counter);
