import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  const NewComponent = (props) => {
    const [counter, setCounter] = useState(10);

    //render OriginalComponent and pass on its props.
    return (
      <OriginalComponent
        {...props}
        name="XYZ"
        counter={counter}
        incrementCounter={() => setCounter((counter) => counter + increaseCount)}
      />
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
