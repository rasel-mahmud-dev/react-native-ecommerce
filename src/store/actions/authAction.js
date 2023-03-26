import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";

export const fetchAuthAction = createAsyncThunk("auth/authFetching", async (payload, thunkAPI) => {
    try {
        let {status, data} = await apis.get("/api/auth/verify", payload)


        if (status === 200) {
            return data
        }

    } catch (ex) {
        let msg = ex?.response?.data?.mesasge || ex.message
        return thunkAPI.rejectWithValue(msg)
    }
})

export const loginAction = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    try {
        let {status, data} = await apis.post("/api/auth/login", payload)
        if (status === 201) {
            return data
        }

    } catch (ex) {
        let msg = ex?.response?.data?.mesasge || ex.message
        return thunkAPI.rejectWithValue(msg)
    }
})


export const registrationAction = createAsyncThunk("auth/login", async (payload, thunkAPI) => {
    try {
        let {status, data} = await apis.post("/api/auth/registration", payload)
        if (status === 200) {
            return data
        }

    } catch (ex) {
        let msg = ex?.response?.data?.mesasge || ex.message
        return thunkAPI.rejectWithValue(msg)
    }
})