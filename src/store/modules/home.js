import { getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeAction = createAsyncThunk("fetchdata",async () => {
    const res = await getHomeGoodPriceData()
    return res
})

const homeSilce = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }){
            state.goodPriceInfo = payload
        }
    },
    // 处理异步操作
    extraReducers: {
        [fetchHomeAction.fulfilled](state, { payload }) {
            // console.log(payload)
            state.goodPriceInfo = payload
        }
    }
})
export const { changeGoodPriceInfoAction } = homeSilce.actions
export default homeSilce.reducer