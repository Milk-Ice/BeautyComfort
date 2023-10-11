import { getHomeGoodPriceData, getHomeHighScoreData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 获取主页数据
export const fetchHomeAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {
    // 好价
    getHomeGoodPriceData().then(res => {
        // 更新
        dispatch(changeGoodPriceInfoAction(res))
    })

    // 高分
    getHomeHighScoreData().then(res => {
        // 更新
        dispatch(changeHighScoreInfoAction(res))
    })
})

// 创建Redux Slice
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},   // 好价
        highScoreInfo: {}    // 高分
    },
    reducers: {
        // 好价
        changeGoodPriceInfoAction(state, { payload }){
            state.goodPriceInfo = payload;
        },
        // 高分
        changeHighScoreInfoAction(state, { payload }){
            state.highScoreInfo = payload;
        }
    },
    extraReducers: {
        // [fetchHomeAction.fulfilled](state, { payload }) {
        //     // console.log(payload)
        //     state.goodPriceInfo = payload
        // }
    }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;
export default homeSlice.reducer;
