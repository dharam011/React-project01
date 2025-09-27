import axios from './Api/Axiosconfig';
import React, { useEffect } from 'react'

const App = () => {
const getProducts = async () => {
  try {
    const response =await axios.get("/products");
    
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
useEffect(() => {
  getProducts();
}, []);

  return (

    <div>App</div>
  )
}

export default App