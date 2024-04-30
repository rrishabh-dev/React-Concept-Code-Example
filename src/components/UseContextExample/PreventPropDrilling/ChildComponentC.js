import { useContext, useState } from "react";

import './index.css';
import ShowSalary from "./ShowSalary";
import { PreventPropDrillingContext } from "../../../context/PreventPropDrillingContext";

const ChildComponentC = () => {
  const context = useContext(PreventPropDrillingContext);
  const [toggleSalaryComponent, setShowSalaryComponent] = useState(false);

  return (
    <>
      <h4>Child Component - C</h4>
      <p>
        <label>Employee ID : <b>{context.Id}</b></label>
      </p>
      <p>
        <label>Employee Name : <b>{context.Name}</b></label>
      </p>
      <p
        onClick={() => setShowSalaryComponent(!toggleSalaryComponent)}
        className="show-salary-link"
      >
        Show Employee Salary
      </p>
      {
        toggleSalaryComponent ? <ShowSalary /> : <></>
      }
    </>
  );
}

export default ChildComponentC;
