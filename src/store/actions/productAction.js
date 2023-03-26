import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";


export const getAllProductAction = createAsyncThunk("products", async (payload, thunkAPI) => {
    try {

        let {status, data} = await apis.get("/api/products", payload)
        if (status === 200) {
            return data.products
        }
    } catch (ex) {
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})


export const getAllCategories = createAsyncThunk("products/categories", async (payload, thunkAPI) => {
    try {

        let {status, data} = await apis.get("/api/categories", payload)
        if (status === 200) {
            return data.categories
        }
    } catch (ex) {
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})

export const addProductAction = createAsyncThunk("product/add", async (payload, thunkAPI) => {
    try {

        let {status, data} = await apis.post("/api/products", payload)

        if (status === 201) {
            return data
        }
    } catch (ex) {
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})