import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App';
import {
  BookContextProvider,
  CounterProvider,
  PreventPropDrillingProvider,
  ThemeContextProvider,
  ToastProvider,
  UserAuthProvider
} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BookContextProvider>
      <CounterProvider>
        <PreventPropDrillingProvider>
          <ThemeContextProvider>
            <ToastProvider>
              <UserAuthProvider>
                <App />
                <ToastContainer />
              </UserAuthProvider>
            </ToastProvider>
          </ThemeContextProvider>
        </PreventPropDrillingProvider>
      </CounterProvider>
    </BookContextProvider>
  </StrictMode>
);
