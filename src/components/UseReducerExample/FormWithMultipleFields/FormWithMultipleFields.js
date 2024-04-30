import React, { useReducer } from 'react';

import formReducers from '../../../reducers/formReducer';

const initialFormState = {
  userName: '',
  password: '',
  email: '',
  hasConsented: false
}

const FormWithMultipleFields = () => {
  const [formState, dispatch] = useReducer(formReducers, initialFormState);

  const handleTextFieldChange = (e) => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value
    });
  };

  console.log('Form-State:', formState);

  return (
    <form>
      <label>
        Username:
        <input
          type='text'
          name='userName'
          value={formState.userName}
          onChange={(e) => handleTextFieldChange(e)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formState.password}
          onChange={(e) => handleTextFieldChange(e)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={formState.email}
          onChange={(e) => handleTextFieldChange(e)}
        />
      </label>
      <br />
      <label>
        Consent to terms & conditions:
        <input
          type='checkbox'
          checked={formState.hasConsented}
          onChange={() => dispatch({ type: 'TOGGLE CONSENT' })}
        />
      </label>
    </form>
  )
}

export default FormWithMultipleFields;
