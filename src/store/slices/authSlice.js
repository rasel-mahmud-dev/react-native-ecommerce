import {createSlice} from "@reduxjs/toolkit";
import {fetchAuthAction, loginAction} from "../actions/authAction";
import AsyncStorage from '@react-native-async-storage/async-storage';


const authSlice = createSlice({
    name: "authState",
    initialState: {
        auth: null,
        authLoaded: false
    },
    reducers: {

    },

    extraReducers: (builder)=>{
        builder.addCase(loginAction.fulfilled, (state, action)=>{
            const {token, ...userData} = action.payload
            state.auth = userData
            state.authLoaded = true
            AsyncStorage.setItem("token", token)
        })


        builder.addCase(fetchAuthAction.fulfilled, (state, action)=>{
            state.auth = action.payload
            state.authLoaded = true
        })



        builder.addCase(fetchAuthAction.rejected, (state)=>{
            state.auth = null
            state.authLoaded = true
        })

    }
})

export default authSlice