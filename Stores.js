import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";
import MenuReducer from "./MenuSlicer"



export const store = configureStore({
    reducer:{
        cartslice : CartReducer,
        menuCache : MenuReducer      
    }
})


export default store;