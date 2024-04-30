import React, { memo } from 'react';

const Button = ({ children, handleClick }) => {
  console.log('Button clicked for:', children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default memo(Button);

/* Note: Here, memo is preventing the re-render of the component if its props or state doesn't changed.
But in this Button component handleClick is a function which we're receiving as a prop from its parent component.
And since functions in React are treated like an object so they do referential equality,
means that the function is created on every render and hence memo is unable to prevent a re-render if the component is receiving a function as a prop. */
