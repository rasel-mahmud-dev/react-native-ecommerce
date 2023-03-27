import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";



export const addBrandAction = createAsyncThunk("product/add-brands", async (payload, thunkAPI) => {
    try {

        let {status, data} = await apis.post("/api/brands", payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (status === 201) {
            return data
        }
    } catch (ex) {
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})


export const getAllBrandsAction = createAsyncThunk("product/add-brands", async (payload, thunkAPI) => {
    try {

        let {status, data} = await apis.get("/api/brands", payload)
        if (status === 200) {
            return data.brands
        }
    } catch (ex) {
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})