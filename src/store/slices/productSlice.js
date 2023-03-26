import {createSlice} from "@reduxjs/toolkit";
import {getAllCategories, getAllProductAction} from "../actions/productAction";


const productSlice = createSlice({
    name: "productState",
    initialState: {
        products: [],
        categories: []
    },
    reducers: {
        clearProducts(state){
            state.products = []
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllProductAction.fulfilled, (state, action) => {
            if (action.payload) {
                state.products = action.payload
            }
        })

        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            if (action.payload) {
                state.categories = action.payload
            }
        })


    }
})

export const {clearProducts} = productSlice.actions
export default productSlice