import React, { memo } from 'react'

const Count = ({ count, text }) => {
  console.log("Count rendering---->", text);
  return (
    <div>{text} is {count}</div>
  )
}

export default memo(Count);
