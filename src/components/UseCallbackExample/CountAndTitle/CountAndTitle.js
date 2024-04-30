import React, { useCallback, useState } from 'react';

import Title from './Title';
import Count from './Count';
import Button from './Button';

const CountAndTitle = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const IncrementAge = useCallback(() => setAge(age + 1), [age]);
  const IncrementSalary = useCallback(() => setSalary(salary + 1000), [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={IncrementAge}>Increment my age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={IncrementSalary}>Increment my salary</Button>
    </div>
  )
}

export default CountAndTitle;
