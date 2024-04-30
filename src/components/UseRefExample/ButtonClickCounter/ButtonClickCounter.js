import { useEffect, useRef } from 'react';

const ButtonClickCounter = () => {
  const ref = useRef(0);

  const handleBtnClick = () => {
    ref.current = ref.current + 1;
    console.log(`Clicked ${ref.current} times`);
  }

  useEffect(() => {
    console.log("the component have been rendered");
  });

  return (
    <>
      <br />
      <button onClick={handleBtnClick}>
        Click Me!
      </button>
    </>
  );
}

export default ButtonClickCounter;
