
import React, { useEffect } from 'react'
import asyncgetUsers from  "./store/UserActions"
import { useDispatch, useSelector } from 'react-redux';



const App = () => {
  const data = useSelector((state)=>state)
const dispatch = useDispatch();
console.log(data);

useEffect(() => {
 dispatch(asyncgetUsers()) ;  
}, []);

  return (

    <div>App</div>
  )
}

export default App