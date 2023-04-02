import {createSlice} from "@reduxjs/toolkit";
import {getGoods} from "../../thunks/goodsThunk";

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getGoods.fulfilled, (state, action) => {
            console.log(action)
        })
    },
})

export const {} = goodsSlice.actions
export  default goodsSlice.reducer