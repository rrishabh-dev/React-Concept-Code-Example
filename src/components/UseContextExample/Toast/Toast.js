import React, { useContext } from 'react';

import ChildComponent from './ChildComponent';
import { ToastContext } from '../../../context/ToastContext';

const Toast = () => {
  const { showToast } = useContext(ToastContext);

  const handleShowToast = (type) => {
    const message = `This is a ${type} toast!`;
    showToast(message, type);
  };

  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={() => handleShowToast("success")}>
        Show Success Toast
      </button>
      <button onClick={() => handleShowToast("error")}>Show Error Toast</button>
      <ChildComponent />
    </div>
  );
}

export default Toast;
