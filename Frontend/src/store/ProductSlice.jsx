import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};
const productSlice = createSlice({
    name: "product",
 initialState,
 reducers:{
    loadProducts: (state, action)=>{
     
        state.data = action.payload;
    }
 },


})
export const {loadProducts} = productSlice.actions;
export default productSlice.reducer;