import { toast } from "react-toastify";
import React, { createContext } from 'react';

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const showToast = (message, type) => toast[type](message);

  return (
    <ToastContext.Provider value={{ showToast }}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
