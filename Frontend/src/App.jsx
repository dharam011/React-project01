
import React, { useEffect } from 'react'
import asyncgetUsers from  "./store/UserActions"
import { useDispatch } from 'react-redux';


const App = () => {
const dispatch = useDispatch();
useEffect(() => {
 dispatch(asyncgetUsers()) ;  
}, []);

  return (

    <div>App</div>
  )
}

export default App