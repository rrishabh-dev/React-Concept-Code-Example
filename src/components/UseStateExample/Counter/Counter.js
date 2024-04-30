import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Counter value is {counter}</div>
      <button onClick={() => setCounter(count => count + 1)}>Increase Counter</button>
      <button onClick={() => setCounter(count => count - 1)}>Decrease Counter</button>
    </>
  )
}

export default Counter;
