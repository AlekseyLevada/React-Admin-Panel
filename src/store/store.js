import {configureStore} from "@reduxjs/toolkit";
import {goodsSlice} from "./slices/goodsSlice/goodsSlice";
import {usersSlice} from "./slices/usersSlice/usersSlice";

export const store = configureStore({
    reducer: {
        goods: goodsSlice.reducer,
        users: usersSlice.reducer,
    },
})