import React, { memo } from 'react';

const Title = () => {
  console.log ("Title Rendering");
  return (
    <div>Title - useCallback Hook</div>
  )
}

export default memo(Title);
