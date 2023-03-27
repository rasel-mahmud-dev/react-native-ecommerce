import {createSlice} from "@reduxjs/toolkit";
import {getAllProductAction} from "../actions/productAction";
import {getAllBrandsAction} from "../actions/brandAction";
import {getAllCategories} from "../actions/categoryAction";


const productSlice = createSlice({
    name: "productState",
    initialState: {
        products: [],
        categories: [],
        brands: []
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


        builder.addCase(getAllBrandsAction.fulfilled, (state, action) => {
            if (action.payload) {
                state.brands = action.payload
            }
        })


    }
})

export const {clearProducts} = productSlice.actions
export default productSlice