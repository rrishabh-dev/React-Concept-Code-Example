import React, { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return <input {...props} type='text' ref={ref} />
})

export default CustomInput;
