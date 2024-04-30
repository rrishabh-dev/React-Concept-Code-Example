/*
  Exposing a ref to your own component:

  Sometimes, you may want to let the parent component manipulate the DOM inside
  of your component. For example, maybe you’re writing a CustomInput component, but
  you want the parent to be able to focus the input (which the parent has no access
  to). You can use a combination of useRef to hold the input and forwardRef to expose
  it to the parent component.
*/

import React, { useEffect, useRef } from 'react';
import CustomInput from './CustomInput';

const ExposingRef = () => {
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current.focus() }, []);

  return <CustomInput ref={inputRef} />
}

export default ExposingRef;
