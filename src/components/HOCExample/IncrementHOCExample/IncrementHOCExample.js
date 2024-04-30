import React from 'react';
import ClickIncrease from './ClickIncrease';
import HoverIncrease from './HoverIncrease';

const IncrementHOCExample = () => {
  return (
    <div>
      <ClickIncrease />
      <hr />
      <HoverIncrease secretText="This is secret !!" />
    </div>
  )
}

export default IncrementHOCExample;
