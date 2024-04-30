import { useContext } from "react";

import { ToastContext } from "../../../context/ToastContext";

const AnotherChildComponent = () => {
  const { showToast } = useContext(ToastContext);

  const triggerToast = () => showToast("Toast triggered from AnotherChild component", "success");

  return (
    <div>
      <h1>Another Child Componenet</h1>
      <button onClick={() => triggerToast()}>
        Trigger Toast
      </button>
    </div>
  );
}

export default AnotherChildComponent;
