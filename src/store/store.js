import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";


const reducers = {
    authState: authSlice.reducer,
    productState: productSlice.reducer
}

const store = configureStore({
    reducer: reducers
})


export default store