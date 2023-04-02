import {createAsyncThunk} from "@reduxjs/toolkit";

export const getGoods = createAsyncThunk(
    'goods/getGoods',
    async () => {
        const response = await fetch('https://api.sampleapis.com/coffee/hot')
            .then(res => res.json())
            .then(data => console.log(data))
        return response
    }
)