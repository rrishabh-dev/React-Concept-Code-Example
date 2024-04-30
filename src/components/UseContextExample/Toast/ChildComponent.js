import { useContext } from "react";

import AnotherChildComponent from "./AnotherChildComponent";
import { ToastContext } from "../../../context/ToastContext";

const ChildComponent = () => {
  const { showToast } = useContext(ToastContext);

  const triggerToast = () => showToast("Toast tiggered from child component", "success");

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={() => triggerToast()}>
        Trigger Toast
      </button>

      <AnotherChildComponent />
    </div>
  );
}

export default ChildComponent;
