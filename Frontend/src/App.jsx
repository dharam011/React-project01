
import React, { useEffect } from 'react'
import  { asyncCurrentUser } from  "./store/actions/userActions"
import { useDispatch, useSelector } from 'react-redux';
import MainRoutes from './Routes/MainRoutes';
import NavBar from './components/NavBar';



const App = () => {
  const data = useSelector((state)=>state)
const dispatch = useDispatch();
console.log(data);

useEffect(() => {
 dispatch(asyncCurrentUser()) ;  
}, []);

  return (

    <div className='App bg-gray-800 h-screen w-screen  text-white '>
      <NavBar/>
      <MainRoutes/>
    </div>
  )
}

export default App