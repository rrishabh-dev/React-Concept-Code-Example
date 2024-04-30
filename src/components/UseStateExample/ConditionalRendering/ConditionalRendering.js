import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [signedIn, setSignedIn] = useState(false)

  const handleSignIn = () => {
    setSignedIn(true)
  }

  const handleSignOut = () => {
    setSignedIn(false)
  }

  return (
    <div>
      <h1>Conditional Rendering Example</h1>

      <div>
        {signedIn ? ( 
          <div>
            <button type="button" onClick={handleSignOut}>Sign Out</button>
            <p>Welcome back, good to see you in here</p>
          </div>) : (
          <div>
            <button type="button"onClick={handleSignIn}>Sign In</button>
            <p>Please Sign in</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConditionalRendering;
