import React from 'react';
import ChildComponentB from './ChildComponentB';

const ChildComponentA = () => {
  return (
    <>
      <h2>Child Component - A</h2>
       <ChildComponentB />
    </>
  );
}

export default ChildComponentA;
