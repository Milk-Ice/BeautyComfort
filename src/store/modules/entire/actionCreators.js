import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constant'

// 定义一个动作创建函数 'changeCurrentPageAction'，接受一个参数 'currentPages'
export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE, // 动作的类型，来自 'actionTypes' 中的常量 'CHANGE_CURRENT'
    currentPage // 传递给动作的数据，通常是一个负载(payload)或数据对象
})
export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOMLIST,
    roomList
})
export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const fectchRoomListAction = (page) => {
    return async (dispatch, getState) => {
        // 修改currentPage
        dispatch(changeCurrentPageAction(page))
        // 根据页码获取最新的数据
        const currentPage = getState().entire.currentPage
        // console.log(currentPage)
        const res = await getEntireRoomList(currentPage*20)
        console.log(currentPage)
        // 获取到最新的数据存在redux的store中
        const roomList = res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}