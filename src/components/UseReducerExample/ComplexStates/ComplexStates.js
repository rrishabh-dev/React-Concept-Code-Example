import React, { useReducer } from 'react';

import { loginHelper } from './loginHelper';
import complexStateReducer from '../../../reducers/complexStateReducer';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const ComplexStates = () => {
  const [state, dispatcher] = useReducer(complexStateReducer, initialState);

  const usernameHandler = e => dispatcher({ type: 'USERNAME', payload: e.target.value });
  const passwordHandler = e => dispatcher({ type: 'PASSWORD', payload: e.target.value });
  const logoutHandler = e => dispatcher({ type: 'LOGGED_OUT' });
  const submitHandler = async e => {
    e.preventDefault();
    // Check credentials (simulated)
    try {
      dispatcher({ type: 'IS_LOADING' });
      await loginHelper({ username: state.username, password: state.password });
      dispatcher({ type: 'IS_NOT_LOADING' });
      dispatcher({ type: 'LOGGED_IN' });
    } catch {
      dispatcher({ type: 'ERROR' });
      alert('🚨 Incorrect username or password');
    }
  };

  return (
    <>
      <h2>useReducer use case</h2>
      <h3>Modify complex states, such as arrays or objects: login form</h3>
      <div style={{ maxWidth: '50%', backgroundColor: '#a8dadc', borderRadius: '1rem', padding: '2rem' }}>
        {
          state.isLoggedIn
          ? <><p>Welcome!</p><button onClick={logoutHandler}>Log out!</button></>
          : <form onSubmit={submitHandler}>
              <div style={{ margin: '1rem 0' }}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={usernameHandler} value={state.username} style={{ margin: '0 1rem' }} placeholder='user' />
              </div>
              <div style={{ margin: '1rem 0' }}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={passwordHandler} value={state.password} style={{ margin: '0 1rem' }} placeholder='password' />
              </div>
              <div style={{ margin: '1rem 0' }}>
                <button type="submit" disabled={state.isLoading}>{state.isLoading ? 'Logging you in...' : 'Log in'}</button>
              </div>
            </form>
        }
      </div>
    </>
  );
}

export default ComplexStates;
