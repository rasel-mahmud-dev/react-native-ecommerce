import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../apis";


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

export const addCategoryAction = createAsyncThunk("product/add-category", async (payload, thunkAPI) => {
    try {
        let {status, data} = await apis.post("/api/categories", payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if (status === 201) {
            return data.categories
        }

    } catch (ex) {
        console.log(ex)
        return thunkAPI.rejectWithValue(ex.response?.data?.message || ex?.message || "Internal error")
    }
})