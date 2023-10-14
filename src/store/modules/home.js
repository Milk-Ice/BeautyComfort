import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommandData, getHomeLongforData } from "@/services/modules/home";
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
    // 折扣
    getHomeDiscountData().then(res =>{
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommandData().then(res => {
        dispatch(changeHomHotRecommandAction(res))
    })
    // 向往的生活
    getHomeLongforData().then(res => {
        dispatch(changeLongforAction(res))
    })
})

// 创建Redux Slice
const homeSlice = createSlice({
    name: "home",
    initialState: {
        goodPriceInfo: {},   // 好价
        highScoreInfo: {},    // 高分
        discountInfo: {},  //折扣
        hotRecommendInfo: {}, 
        longforInfo: {}
    },
    reducers: {
        // 好价
        changeGoodPriceInfoAction(state, { payload }){
            state.goodPriceInfo = payload;
        },
        // 高分
        changeHighScoreInfoAction(state, { payload }){
            state.highScoreInfo = payload;
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload;
        },
        changeHomHotRecommandAction(state, { payload }) {
            state.hotRecommendInfo = payload;
        },
        changeLongforAction(state, { payload }) {
            state.longforInfo = payload
        }
    },
    extraReducers: {
        // [fetchHomeAction.fulfilled](state, { payload }) {
        //     // console.log(payload)
        //     state.goodPriceInfo = payload
        // }
    }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeHomHotRecommandAction,changeLongforAction } = homeSlice.actions;
export default homeSlice.reducer;
