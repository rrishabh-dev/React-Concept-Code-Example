import React from 'react';
import { useContext } from 'react';
import { PreventPropDrillingContext } from '../../../context/PreventPropDrillingContext';

const ShowSalary = () => {
  const context = useContext(PreventPropDrillingContext);

  return (
    <p>
      <label>Employee Salary : <b>₹{context.Salary}</b></label>
    </p>
  )
}

export default ShowSalary;
