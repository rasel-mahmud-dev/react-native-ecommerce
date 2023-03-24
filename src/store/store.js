import {configureStore, createStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";


const reducers = {
    auth: authSlice.reducer
}

const store = configureStore({
    reducer: reducers
})


export default store