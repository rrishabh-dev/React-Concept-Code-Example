import React, { useEffect, useRef } from 'react';

const AccessDOM = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>AccessDOM</div>
      <input ref={inputRef} type='text' />
      <br /><hr />
      <input type='number' />
    </>
  )
}

export default AccessDOM;
