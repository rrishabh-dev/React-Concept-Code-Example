import React from 'react';
import ChildComponentC from './ChildComponentC';

const ChildComponentB = () => {
  return (
    <>
      <h3>Child Component - B</h3>
       <ChildComponentC />
    </>
  );
}

export default ChildComponentB;
