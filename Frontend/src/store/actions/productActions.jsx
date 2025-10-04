import axios from "../../Api/Axiosconfig";
import { loadProducts } from "../ProductSlice";

export const asyncLoadProducts = () => async (dispatch, getState) =>{
    try{
        const {data} = await axios.get("/products");
        dispatch(loadProducts(data))
    }
    catch(error){
        console.log(error)
    }
}
export const asyncCreateProduct = (product) => async (dispatch, getState) =>{


    try{

    const response = await axios.post("/products",product)
    console.log(response.data);
    dispatch(asyncLoadProducts())
    }
    catch(error){
        console.log(error)
    }
}
   