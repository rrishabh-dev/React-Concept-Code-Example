import React from 'react'

import Counter from './Counter';
import SiteHeader from './SiteHeader';

const Parent = () => {
  return (
    <>
      <SiteHeader />
      <Counter />
    </>
  )
}

export default Parent;
