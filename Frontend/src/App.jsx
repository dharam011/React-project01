
import React, { useEffect } from 'react'
import asyncgetUsers from  "./store/UserActions"

const App = () => {

useEffect(() => {
  asyncgetUsers();
}, []);

  return (

    <div>App</div>
  )
}

export default App